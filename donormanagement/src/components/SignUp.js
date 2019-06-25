import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

  import './SignUp.css'

  import Component from 'react-dom'
  import React from 'react'
  import PropTypes from 'prop-types';
  import axios from 'axios'
  import { connect } from "react-redux";
  import { addUser } from '../actions/index'
  
  class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                username: '',
                password: '',
                error: {},
                isLoading: false
        };
    }

    render() {
        // const { error } = this.state;
      return (
        <Container className="SignUp">
          <h2>Sign Up</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={this.state.username} 
                  onChange={this.handleChange} required
                />
                {/* {error.username && <span className="help-block">{error.username}</span>} */}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Password</Label>

                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  value={this.state.password} 
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
        const newUser = {
         username: this.state.username,
         password: this.state.password,
        };
        console.log(newUser)
        this.props.addUser(newUser)
    
      }
  }

  SignupForm.propTypes = {
    addUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  users: state.users,
});

export default connect(
  mapStateToProps,
  {
    addUser
  }
)(SignupForm);
