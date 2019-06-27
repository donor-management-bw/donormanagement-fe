import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Navbar, NavbarBrand, NavItem, NavLink, Nav
  } from 'reactstrap';
  import swal from 'sweetalert';
  import './SignUp.css'

  import Component from 'react-dom'
  import React from 'react'
  import PropTypes from 'prop-types';
  import axios from 'axios'
  import { connect } from "react-redux";
  import { addDonor} from '../actions/index'
  
  
  class AddDonorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                name: '',
                address: '',
                email: '',
                phone: '',
                error: {},
                isLoading: false
        };        
    }

    render() {
        // const { error } = this.state;
      return (
        <Container className="SignUp">
          <h2>Donation Form</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={this.state.name} 
                  onChange={this.handleChange} required
                />
                {/* {error.donorname && <span className="help-block">{error.donorname}</span>} */}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>address</Label>
                <Input
                  type="address"
                  name="address"
                  id="address"
                  placeholder="address"
                  value={this.state.address} 
                  onChange={this.handleChange} required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={this.state.email} 
                  onChange={this.handleChange} required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>phone</Label>
                <Input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  value={this.state.phone} 
                  onChange={this.handleChange} required
                />
              </FormGroup>
            </Col>

            <Button disabled={this.state.isLoading}>Submit</Button>

          </Form>
        </Container>

      );

    }
    
      handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });

      };

      handleSubmit = e => {
        e.preventDefault();
        let addedDonor =this.state.name;

        const newDonor = {
          dname: this.state.name,
          daddress: this.state.address,
          demail: this.state.email,
          dphone: this.state.phone
          //  donation: this.state.donation <----donotions have to be added after the creation of the donor itself so we have the ID created
        };        
        this.props.addDonor(newDonor)
        this.setState({
          name: '',
          address: '',
          email: '',
          phone: '',
          error: {},
          isLoading: false
        })
        swal("Donor Added!", `${addedDonor} was added to the donor list`, "success");
      }
  }

  AddDonorPage.propTypes = {
    addDonor: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  donors: state.donors,
});

export default connect(
  mapStateToProps,
  {
    addDonor
  }
)(AddDonorPage);