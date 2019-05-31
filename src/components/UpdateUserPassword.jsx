/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as selectors from '../selectors/updatePasswordSelector';
import { updatePassword } from '../actions/updatePasswordAction';
import UpdatePasswordView from '../views/UpdatePassword';

/**
 * Form for resetting password
 * @class UpdateUserPassword
 * @extends {Component}
 * @param {object} props Component props
 * @param {function} props.updatePassword action creator function
 * @returns {JSX}
 */
export class UpdateUserPassword extends Component {
  // local state for handling email gotten from the input field
  state = {
    password: null,
    confirmPassword: null,
  }

  // this is a function to update the password and confirmPassword state
  updateInput = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  // A function that triggers the post request action
  handleSubmit = async (event) => {
    event.preventDefault();
    const token = new URLSearchParams(window.location.search).get('token');
    const { email } = jwtDecode(token);
    const { password, confirmPassword } = this.state;
    const validateInput = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!password.match(validateInput)) {
      toast.error('Password must contain uppercase and lowercase letters, a number and not be less than 6 characters');
    } else if (password === confirmPassword) {
      // calling the action creator to update the store
      const { updatePassword, message, history } = this.props;
      updatePassword(token, password, confirmPassword, email);
      if (message && message === 'Password reset successful') {
        toast.success('Password updated successfully !');
      }
      if (message && message !== 'Password reset successful') {
        toast.error('Your request to reset password has expired or check your internet connection.');
      }
      history.push('/login');
    } else {
      toast.error('Password do not match');
    }
  };

  /**
   * @memberof UpdateUserPassword
   * @returns {JSX} The JSX representation of the Reset Password component
  */
  render() {
    return (
      <UpdatePasswordView
        handleSubmit={this.handleSubmit}
        updateInput={this.updateInput}
      />
    );
  }
}

UpdateUserPassword.propTypes = {
  updatePassword: PropTypes.func,
  history: PropTypes.object,
  message: PropTypes.string,
};

UpdateUserPassword.defaultProps = {
  updatePassword: () => {},
};

const mapStateToProps = createStructuredSelector({
  message: selectors.getUpdatePasswordMessage,
});


export default connect(mapStateToProps, { updatePassword })(UpdateUserPassword);
