/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UpdatePassword = ({
  handleSubmit,
  updateInput,
}) => (
  <div className="background min-vh-100">
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
                   Reset Password
                </h3>
                <p>Please fill in your new password to gain access to your account.</p>
              </div>

              <div className="login__input__section">
                <form
                    onSubmit={(event => handleSubmit(event))}
                  >
                  <div className="form-group">
                    <div className="login__input__field">
                      <label htmlFor="email">New Password</label>
                      <input
                          name="password"
                          id="password"
                          type="password"
                          className="form-control"
                          onChange={event => updateInput(event)}
                        />
                    </div>
                    <div className="login__input__field">
                      <div className="login__forgot-password">
                        <label htmlFor="password">Confirm Password</label>
                      </div>
                      <input
                          name="confirmPassword"
                          id="confirm_password"
                          type="password"
                          className="form-control"
                          onChange={event => updateInput(event)}
                          required
                        />
                    </div>
                    <div>
                      <button
                          className="form-control login__btn--large"
                          type="submit"
                        >
                          Reset Password
                      </button>
                    </div>
                  </div>
                </form>
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

UpdatePassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired
};

export default UpdatePassword;
