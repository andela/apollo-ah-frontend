import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';
import { signUpUser, clearErrors } from '../actions/signupActions';
import ErrorAlert from '../views/ErrorAlert.jsx';

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
    console.log('yaay');  
    const userData = {
      email: this.state.data.email,
      password: this.state.data.password,
      username: this.state.data.username,
    };
    this.props.signUpUser(userData);
  }

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
   
  }; 
  handleErrorClose = (e) => {
      console.log('closed');
      this.props.clearErrors();
  }
  render(){
    let message;
    if (this.props.errors) {
      console.log('setting message...');
      message = this.props.errors[0];
    }
   
    console.log(this.props);
    // console.log(typeof this.props.errors);
    return (
      <form className="form">
        <ErrorAlert message={message} close={this.handleErrorClose}/>
        <input name="email" type="email" onChange={this.handleChange} placeholder="Email"  className="form"/>
        <input name="username" type="text" onChange={this.handleChange}  placeholder="Username"  className="form"/>
        <input name="password" placeholder="Password" onChange={this.handleChange}  type="password" className="form"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
Signup.propTypes = {
  signUpUser: propTypes.func.isRequired,
  clearErrors: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.signupReducer.loading,
  errors: state.signupReducer.errors
});
export default connect(() => mapStateToProps, { signUpUser, clearErrors })(withRouter(Signup));