import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledCollapse,
    Card,
    CardBody,
    Collapse,
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap';

import './DonationsPage.css'
import { fetchDonors } from "../actions/index"
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types'
import DonorCard from './DonorCard';


class DonationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: '',
      donations: [],
    }
  }
    render() {       
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                      <NavbarBrand href="/">Donor Management</NavbarBrand>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/signup">Signup</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/donationform">Add Donor</NavLink>
                        </NavItem>
                      </Nav>
                    </Navbar>
                </div>
                {this.props.donors.map(donor => (
                 <DonorCard toggle={this.toggle}
                            donor={donor}
                            collapse={this.state.collapse}/>
                ))}
            </div>
        )
    }
    componentDidMount() {
      this.props.fetchDonors();
    }
}

Collapse.propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.object,
};

const mapStateToProps = state => ({
  donors: state.donors
})

export default connect(mapStateToProps, { fetchDonors })(DonationsPage)