import React from 'react'
import {connect} from 'react-redux'
import {
    Collapse
} from 'reactstrap';

import './DonationsPage.css'
import { fetchDonors, addDonation } from "../actions/index"
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
  donationAdd = (newDonation) => {
    this.props.addDonation(newDonation);
  }
    render() {       
        return (
            <div>
                  <div className="header-title"> 
                    Current Donor List
                  </div>
                {this.props.donors.map(donor => (
                 <DonorCard toggle={this.toggle}
                            donor={donor}
                            collapse={this.state.collapse}
                            donationAdd={this.donationAdd}/>
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

export default connect(mapStateToProps, { fetchDonors, addDonation })(DonationsPage)