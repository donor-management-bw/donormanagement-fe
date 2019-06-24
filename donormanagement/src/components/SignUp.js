import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

  import Component from 'react-dom'
  import React from 'react'
  import PropTypes from 'prop-types';


  
  
  class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
        };
    }

    render() {
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
                  value={this.state.username} 
                  onChange={this.handleChange} required
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
      );
    }
    
      handleChanges = e => {
        e.preventDefault();
        const { user } = this.state;
        this.setState({
           user:{
            ...user,
            [e.target.name]: e.target.value
            }
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.userSignupRequest(this.state)
      };
  }

  SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm