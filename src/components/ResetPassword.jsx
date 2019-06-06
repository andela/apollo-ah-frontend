/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as selectors from '../selectors/resetPassword';
import { resetPassword } from '../actions/resetPasswordAction';
import ResetPasswordForm from '../views/ResetPasswordForm';

/**
 * Form for resetting password
 * @class UpdateUserPassword
 * @extends {Component}
 * @param {object} props Component props
 * @param {function} props.updatePassword action creator function
 * @returns {JSX}
 */
export class ResetPassword extends Component {
  // local state for handling email gotten from the input field
  state = {
    password: null,
    confirmPassword: null,
  }

  // this is a function to update the password and confirmPassword state
  updateInput = (event) => {
    this.setState({
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
      const { resetPassword, history } = this.props;
      await resetPassword(token, password, confirmPassword, email);
      const { message } = this.props;
      message === 'Password reset successful'
        ? toast.success('Password updated successfully !')
        : toast.error('Your request to reset password has expired or check your internet connection.');
      history.push('/login');
    } else {
      toast.error('Password do not match');
    }
  };

  /**
   * @memberof ResetPassword
   * @returns {JSX} The JSX representation of the Reset Password component
  */
  render() {
    return (
      <ResetPasswordForm
        handleSubmit={this.handleSubmit}
        updateInput={this.updateInput}
      />
    );
  }
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func,
  history: PropTypes.object,
  message: PropTypes.string,
};

ResetPassword.defaultProps = {
  resetPassword: () => {},
};

const mapStateToProps = createStructuredSelector({
  message: selectors.getResetPasswordMessage,
});


export default connect(mapStateToProps, { resetPassword })(ResetPassword);
