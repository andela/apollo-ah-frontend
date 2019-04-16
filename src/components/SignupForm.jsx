/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { signUpUser, clearErrors, addError } from '../actions/signupActions';
import ErrorAlert from '../views/ErrorAlert';

class Signup extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
      username: ''
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { signUpUser } = this.props;
    const { data :{ email, password, username } } = this.state;
    const userData = {
      email: email,
      password: password,
      username: username,
    };
    if (this.handleValidation(userData)) {
      signUpUser(userData);
    }
  }

  handleValidation = (data) => {
    const { addError } = this.props;
    let errors = [];
    if(data.email == "") {
      errors.push({message: "Email is required", field: "email"});
      addError(errors);
      return false;
    }
    if (data.username == "") {
      errors.push({message: "A valid username is required", field: "username"});
      addError(errors);
      return false;
    }
    if ( data.password == "") {
      errors.push({message: "A password is required", field: "password"});
      addError(errors);
      return false;
    }
    return true;
  }

  handleChange = (e) => {
    const { data } = { ...this.state };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  }; 

  handleErrorClose = (e) => {
    const { clearErrors } = this.props;
    clearErrors();
  }


  render(){
    const { success, history } = this.props;
    if (success) {
      history.push('/');
      return <Redirect to="/" />;
    }
    let message;
    const { errors } = this.props;
    if (errors) {
      message = errors[0];
    } else {
      message = null;
    }
    let { loading } = this.props;
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
        <div className="form-group mb-4">
          <label htmlFor="email" className="font-weight-bold"> Email</label>
          <input type="email" className="form-control text-lowercase" id="email" name="email" onChange={this.handleChange}  />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="fname" className="font-weight-bold">Username</label>
          <input type="text" className="form-control" id="username" name="username" onChange={this.handleChange}  />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="font-weight-bold">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange}  />
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-brand w-100 btn-rectangle mt-1">
          
          {loading? 
          (
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
export default connect(() => mapStateToProps, { signUpUser, clearErrors, addError })(withRouter(Signup));
