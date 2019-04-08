import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import FacebookButton from '../views/common/FacebookButton';
import GoogleButton from '../views/common/GoogleButton';
import { loginFacebook, loginGoogle }  from '../utils';
import socialLogin  from '../actions/socialAction';
import { globalError } from '../actions/globalActions';

/**
 * CLass representing Social Login (OAuth) Components
 *
 * @class SocialLogin
 * @extends {Component}
 */
export class SocialLogin extends Component {
  static propTypes = {
    handleLogin: PropType.func.isRequired,
    handleError: PropType.func.isRequired,
    isAuthenticated: PropType.bool.isRequired,
  }
  
  /**
   * Creates an instance of SocialLogin.
   * 
   * @returns {void}
   * @memberof SocialLogin
   */
  constructor() {
    super();
    this.socialResponse = this.socialResponse.bind(this);
  }

  /**
   * Handles response from service provider
   *
   * @param {object} response - The response from obtained facebook
   * @param {Function} callback - Response handler
   * @returns {void}
   */
  socialResponse(response, callback) {
    const { handleLogin, handleError } = this.props;
    callback(response, handleLogin, handleError);
  }

  /**
   * React render function
   *
   * @returns {JSX.Element} - DOM element
   * @memberof SocialLogin
   */
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) { // redirect the user if authenticated
      return <Redirect to="/" />;
    }
    
    return (
      <div className="signup__socials__content">
        <div className="signup__socials__icons">
          <FacebookButton
            handleResponse={(response) => this.socialResponse(response, loginFacebook)}
          />
          <GoogleButton
            handleResponse={(response) => this.socialResponse(response, loginGoogle)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.global.isAuthenticated,
});

const mapDispatchToProps = {
  handleLogin: (payload) => socialLogin(payload),
  handleError: (error) => globalError(error),
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);
