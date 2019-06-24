import React from 'react'
import SignUpForm from './SignUp'
import {connect} from 'react-redux'
import { userSignupRequest } from '../actions/index'
import PropTypes from 'prop-types';

class SignUpPage extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        return (
            <div>
                <SignUpForm userSignupRequest={userSignupRequest} />
            </div>
        )
    }
}

SignUpPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignUpPage)