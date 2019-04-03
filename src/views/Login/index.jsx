import React from 'react';
import ResetPassword from '../ResetPassword';

function Login(props) {
  return (
    <div>
      <button type="button" className="btn btn-link" data-toggle="modal" data-target="#myModal">Forgot password?</button>
      <ResetPassword />
    </div>
  );
}

export default Login;
