import React from 'react';
import SignupForm from '../components/SignupForm.jsx';

class Signup extends React.Component {
 
  render() {
    return (
      <SignupForm submit={this.handleSubmit}/>
    );
  }
}

export default Signup;