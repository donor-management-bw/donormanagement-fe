import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Navbar, NavbarBrand, NavItem, NavLink, Nav
  } from 'reactstrap';

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
                error: {},
                isLoading: false
        };
    }

    render() {
        // const { error } = this.state;
      return (
        <Container className="SignUp">
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
        const newDonor= {
         donorname: this.state.donorname,
         donation: this.state.donation
        };
        console.log(newDonor)
        this.props.addDonor(newDonor)
    
      }
  }

  AddDonorPage.propTypes = {
    addDonor: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  Donors: state.Donors,
});

export default connect(
  mapStateToProps,
  {
    addDonor
  }
)(AddDonorPage);