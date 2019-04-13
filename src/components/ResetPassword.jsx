/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../selectors/resetPassword';
import Modal from '../views/Modal.jsx';
import passwordResetRequest from '../actions/resetPassword';
import modalAction from '../actions/modal';


/**
 * Form for resetting password
 * @param {object} props Component props
 * @param {function} props.passwordResetRequest action creator function
 */
function ResetPassword(props) {
  /** local state for handling email gotten from the input field */
  const [userEmail, setUserEmail] = useState({
    email: null,
  });

  /** local state for adding a new css class to a div */
  const [inputIsValid, setInputIsValid] = useState('');

  /** mutable object for an input */
  const input = useRef(null);

  /** passing global state loading as props into variables */
  let { responseMessage, isLoading } = props;

  /** this is a function to update the email state */
  const updateInput = event => {
    setInputIsValid('validated');
    setUserEmail({ ...userEmail, [event.target.name]: event.target.value });
  };

  /** A function to clear the input field */
  const clearInputs = () => {
    input.current.value = null;
    setUserEmail({ ...userEmail, email: null });
  };

  /** A function that triggers the post request action */
  const handleSubmit = async (event) => {
    event.preventDefault();
    /** calling the action creator to update the store */
    props.passwordResetRequest(userEmail.email);
  };

  /** A function that ensures that when modal is closed, content is lost*/
  const clearModalState = (content) => {
    /** action to clear response message */
    props.modalAction();
    if (content != 'modalContent') {
      setInputIsValid('');
      clearInputs();
    }
  };

  return (
    <Modal clearMessage={clearModalState} title="Recover Password!">
      <p className="reset_password_paragraph">Enter the email address you used when you created your account. You will receive instructions to reset your password in your mail box.</p>
      <form className={`reset-password-group ${inputIsValid}`}>
        <div className="form-group">
          <input ref={input} type="email" className="reset_form_control btn-block" id="email" placeholder="Enter email" name="email" onChange={(event) => updateInput(event)} required />
          <span className="input-danger mt-2">A valid email is required</span>
          <button type="submit" className="reset_btn btn-block mt-3" onClick={(event => handleSubmit(event))}>Request reset link</button>
        </div>

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
        responseMessage ? <div className="reset_alert_danger">{responseMessage}</div> : null
      }
    </Modal>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectors.submitResetPassword,
    responseMessage: selectors.getResponseMessage,
  }
);

export default connect(mapStateToProps, { modalAction, passwordResetRequest })(ResetPassword);
