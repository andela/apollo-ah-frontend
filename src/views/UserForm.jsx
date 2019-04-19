/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlertMessage from './AlertMessage';
import ResetPassword from '../components/ResetPassword';

/**
 * @param {*} {props} - Props supplied to the component from the Login component
 * @returns {JSX} - The JSX that will represent the login form on the UI
 */
function UserForm(props) {
  const {
    resetState,
    handleChange,
    handleLogin,
    status,
    usernameInput,
    location,
    email,
    password,
    message,
    isLoading,
  } = props;

  const notification = message;
  return (
    <div className="background min-vh-100">
      <ResetPassword />
      <div className="container-fluid">
        <div className="row">
          <div className="login">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="login__nav">
                <Link to="/" href="/">&larr;</Link>
              </div>
              <div className="login__content">
                <div className="login__intro">
                  <h3 className="text-center">
                    {(location === '/login') ? 'Login' : 'Signup'}
                  </h3>
                  <p>Please fill in your email and password to gain access to your account.</p>
                </div>
                {notification && (
                  <AlertMessage
                    notification={notification}
                    resetState={resetState}
                    status={status}
                  />
                )}
                <div className="login__input__section">
                  <form
                    onSubmit={
                      (e) => {
                        e.preventDefault();
                        handleLogin();
                      }
                    }
                  >
                    <div className="form-group">
                      <div className="login__input__field">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          value={email}
                          className="form-control"
                          autoComplete="true"
                          onChange={(e) => { handleChange(e); }}
                        />
                      </div>
                      {usernameInput}
                      <div className="login__input__field">
                        <div className="login__forgot-password">
                          <label htmlFor="password">Password</label>
                          <button
                          type="button"
                          className="btn btn-link login__reset__btn "
                          data-toggle="modal"
                          data-target="#myModal"
                          >
                          Forgot password?
                          </button>
                        </div>
                        <input
                          name="password"
                          id="password"
                          type="password"
                          value={password}
                          autoComplete="true"
                          className="form-control"
                          onChange={
                            e => handleChange(e)
                          }
                        />
                      </div>
                      <div>
                        <button
                          className="form-control login__btn--large"
                          type="submit"
                        >
                          {!isLoading && ((location === '/login') ? 'Login' : 'Join Authors Haven')}
                          {isLoading && <span className="spinner-border text-light" />}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="login__socials">
                  <div className="row login__socials__intro">
                    <hr />
                    <p>Or login using</p>
                  </div>
                  {/* social logincomponent here please */}
                </div>
              </div>
            </div>

            <div className="d-none d-sm-flex col-sm-6 col-md-6 col-lg-6 banner">
              <div className="login__banner">
                <div className="login__banner__content">
                  <hr />
                  <div>
                    <h3>Hello,</h3>
                    <p>Log in to your account to start reading and writing beautiful articles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserForm.propTypes = {
  resetState: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  handleLogin: PropTypes.func,
  message: PropTypes.string,
  status: PropTypes.string,
  usernameInput: PropTypes.node,
  location: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  isLoading: PropTypes.bool,
};

UserForm.defaultProps = {
  handleChange: f => f,
  handleLogin: f => f,
  message: '',
  status: '',
  usernameInput: (<div />),
  location: '/login',
  email: '',
  password: '',
  isLoading: false,
};

export default UserForm;
