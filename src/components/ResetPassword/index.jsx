/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Modal from '../../views/Modal.js';
import passwordResetRequest from '../../actions/resetPassword';


/**
 * Form for resetting password
 * @param {object} props Component props
 * @param {function} props.passwordResetRequest action creator function
 */
function ResetPassword(props) {
  const [userEmail, setUserEmail] = useState({
    email: null,
  });

  const { isLoading } = props;

  const [message, setMessage] = useState(null);
  const input = useRef(null);
  
  const updateInput = event => {
    setUserEmail({ ...userEmail, [event.target.name]: event.target.value });
  };

  const clearInputs = () => {
    input.current.value = null;
    setUserEmail({ ...userEmail, email: null });
  };

  const handleSubmit = () => {
    setMessage(null);
    props.passwordResetRequest(userEmail.email).then(res => {
      clearInputs();
      if (res.code === 400) {
        setMessage(res.data[0].message);
      }
      if (res.code === 200) {
        setMessage(res.message);
      }
    });
  };

  const validateUserData = (event) => {
    event.preventDefault();
    const fieldsArr = Object.entries(userEmail);
    const errors = [];
    fieldsArr.forEach(field => {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
      }
    });
    if (errors.length < 1) {
      return handleSubmit(event);
    } else {
      setMessage(errors);
    }
  };

  return (
    <Modal clearMessage={() => setMessage(null)} title="Recover Password!">
      <p className="reset_password_paragraph">Enter the email address you used when you created your account. You will receive instructions to reset your password in your mail box.</p>
      <form>
        <div className="form-group">
          <input ref={input} type="email" className="reset_form_control" id="email" placeholder="Enter email" name="email" onChange={(event) => updateInput(event)} />
        </div>
        <button type="submit" className="reset_btn" onClick={(event => validateUserData(event))}>Request reset link</button>
      </form>
      <div>
        {
          isLoading ?
            (
              <div className="reset_spinner_box">
                <ClipLoader
                  size={40}
                  color="purple"
                />
              </div>
            ) : null
        }
      </div>
      {
        message ? <div className="reset_alert_danger">{message}</div> : null
      }
    </Modal>
  );
}

const mapStateToProps = state => ({
  isLoading: state.resetPasswordReducer.isLoading,
});

export default connect(mapStateToProps, { passwordResetRequest })(ResetPassword);
