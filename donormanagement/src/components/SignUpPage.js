import React from 'react'
import SignUpForm from './SignUp'
import {connect} from 'react-redux'
import { SignUp } from '../actions/index'
import PropTypes from 'prop-types';

class SignUpPage extends React.Component {
    render() {
        const { SignUp } = this.props;
        return (
            <div>
                <SignUpForm SignUp={SignUp} />
            </div>
        )
    }
}

SignUpPage.propTypes = {
    SignUp: PropTypes.func.isRequired
}

export default connect(null, { SignUp })(SignUpPage)