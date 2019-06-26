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
    CardBody
} from 'reactstrap';

import './DonationsPage.css'
import { fetchDonors } from "../actions/index"


class DonationsPage extends React.Component {
  state = {
    name: '',
    address: '',
    email: '',
    donations: []
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
                          <NavLink href="#">Add Donor</NavLink>
                        </NavItem>
                      </Nav>
                    </Navbar>
                </div>
                {this.props.donors.map(donor => (
                <div className="card">
                  <Button color="primary" id="toggler" style={{ margin: '1rem' }}>
                  <h1>{donor.dname}</h1>
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                      <Card>
                          <CardBody>
                          <h1>{donor.dname}</h1>
                          <h3>{donor.demail}</h3>
                          <h3>{donor.daddress}</h3>
                          <h3>{donor.ddonations}</h3>
                          </CardBody>
                      </Card>
                  </UncontrolledCollapse>
                  <Button size="sm">Edit Donor</Button>
                </div>
                ))}
            </div>
        )
    }
    componentDidMount() {
      this.props.fetchDonors();
    }
}

const mapStateToProps = state => ({
  donors: state.donors
})

export default connect(mapStateToProps, { fetchDonors })(DonationsPage)