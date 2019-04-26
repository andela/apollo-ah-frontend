import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { signUpUser, clearErrors, addError } from '../actions/signupActions';
import ErrorAlert from '../views/ErrorAlert';
import Input from '../views/Input';

/**
 * @class Signup
 * @extends { React }
 */
class Signup extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
      username: ''
    },
  }

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
   * @param {object} e - This is the event object
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { signUpUser } = this.props;
    const { data: { email, password, username } } = this.state;
    const userData = {
      email,
      password,
      username,
    };
    if (this.handleValidation(userData)) {
      signUpUser(userData);
    }
  }

  /**
   * This function validates data from the form
   * @param {object} data - This is data gotten from the form
   */
  handleValidation = (data) => {
    const { addError } = this.props;
    const errors = [];
    let validate = true;

    if (data.email === '') {
      errors.push({ message: 'Email is required', field: 'email' });
      validate = false;
    }
    if (data.username === '') {
      errors.push({ message: 'A valid username is required', field: 'username' });
      validate = false;
    }
    if (data.password === '') {
      errors.push({ message: 'A password is required', field: 'password' });
      validate = false;
    }
    if (validate === false) {
      addError(errors);
    }
    return validate;
  }

  /**
   * This function updates the state, as the data in the forms change
   *  @param {object} e - This is the event object
   */
  handleChange = (e) => {
    const { data } = { ...this.state };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  /**
   * This function updates the errors in the store, it clears the current errors
   */
  handleErrorClose = () => {
    const { clearErrors } = this.props;
    clearErrors();
  }

  /**
   * @returns {JSX} - returns the signup form
   */
  render() {
    const { success, history, errors } = this.props;
    if (success) {
      history.push('/');
      return <Redirect to="/" />;
    }
    let message;
    if (errors) {
      [message] = errors;
    } else {
      message = null;
    }
    const { loading } = this.props;
    return (
      <form className="form p-sm-4 p-3 signup-form">
        <h1>Register</h1>
        <p className="signup-form-message">
          If you already have an account?
          {' '}
          <Link
            to="/login"
            className="d-inline-block transition"
          >
            Login here,
          </Link>
          {' '}
          else fill the form below to create an account.
        </p>
        <ErrorAlert message={message} close={this.handleErrorClose} />
        <Input name="email" display="Email" onChange={this.handleChange} type="email" />
        <Input name="username" display="Username" onChange={this.handleChange} />
        <Input name="password" display="Password" onChange={this.handleChange} type="password" />
        <button onClick={this.handleSubmit} type="submit" className="btn btn-brand w-100 btn-rectangle mt-1">
          {loading
            ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : 'Join Authors Haven'}
        </button>
        <div className="social-grp">
          <p>
            By signing up you agree to accept and adhere to our
            {' '}
            <a href="terms.html">terms and conditions</a>
          </p>
        </div>
      </form>
    );
  }
}
Signup.propTypes = {
  signUpUser: propTypes.func.isRequired,
  clearErrors: propTypes.func.isRequired,
  addError: propTypes.func.isRequired,
  errors: propTypes.array,
  success: propTypes.bool,
  loading: propTypes.bool,
  history: propTypes.object
};

const mapStateToProps = state => ({
  loading: state.signupReducer.loading,
  errors: state.signupReducer.errors,
  success: state.signupReducer.success
});
export default
connect(() => mapStateToProps, { signUpUser, clearErrors, addError })(withRouter(Signup));
