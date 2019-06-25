import React from 'react'
import SignUpForm from './SignUp'
import {connect} from 'react-redux'
import { addUser } from '../actions/index'
import PropTypes from 'prop-types';

class SignUpPage extends React.Component {
    render() {
        const { addUser } = this.props;
        return (
            <div>
                <SignUpForm addUser={addUser} />
            </div>
        )
    }
}

SignUpPage.propTypes = {
    addUser: PropTypes.func.isRequired
}

export default connect(null, { addUser })(SignUpPage)