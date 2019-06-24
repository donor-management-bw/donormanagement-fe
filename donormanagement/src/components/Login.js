import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import Loader from 'react-loader-spinner';

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
    
    login = () => {
        this.props.login(this.state.credentials);
    }

    render() {
        return (
            <Div className='login-main'>
                <Form className='form-login' onSubmit={this.login}>
                <Input className='input-username'
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <Input className='input-password'
                    backColor='#FFFFFF'
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <Button backColor='#FFFFFF'>
                    {this.props.loggingIn ? (
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                    'Log in'
                    )}
                </Button>
                </Form>
            </Div>
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