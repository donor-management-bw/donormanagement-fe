import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import Loader from 'react-loader-spinner'

import './Login.css';

// Reactstrap components
import { Div, Form, Button, Input } from 'reactstrap';

class Login extends React.Component {
    state = {
        credentials: {
          username: '',
          password: ''
        }
    }
    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
    login = (e) => {
      e.preventDefault();
      let credentials = `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`;      
      this.props.login(credentials).then(res => {
        if (res) {
          this.props.history.push('/');
        }
      });
    }

    render() {
        return (
            <div className='login-main'>
                <Form className='form-login' onSubmit={this.login}>
                  <h2 className='h2-signin'>Welcome sign in!</h2>
                <Input className='input-username'
                    placeholder='username...'                    
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <Input className='input-password'
                    placeholder='password...'                    
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <Button className='login-button'>
                    {this.props.loggingIn ? (
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                    'Log in'
                    )}
                </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login } 
  )(Login);