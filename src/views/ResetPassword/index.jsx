import React, { useState } from 'react';
import { connect } from 'react-redux';
import { passwordResetRequest } from '../../actions/resetPassword';
import classes from './ResetPassword.css';

function ResetPassword(props) {
  const [userEmail, setUserEmail] = useState({
    email: null,
  });
  
  const updateInput = event => {
    setUserEmail({ ...userEmail, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    props.passwordResetRequest(userEmail.email);
  };

  const validateUserData = (event) => {
    event.preventDefault();
    // setLoading(true);
    const fieldsArr = Object.entries(userEmail);
    const errors = [];
    fieldsArr.forEach(field => {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
        // props.failureToast(`${field[0]} is required.`);
      }
    });
    return errors.length < 1 ? handleSubmit() : console.log('--->', errors);
  };

  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className={classes.ModalContent}>
          <div className={classes.cancelTop}>
            <button type="button" className={classes.Close} data-dismiss="modal">&times;</button>
          </div>
          <div className={classes.ModalBody}>
            <div className={classes.ModalHeader}>
              <h4 className={classes.ModalTitle}>Recover Password!</h4>
            </div>
            <p className={classes.Paragraph}>Enter the email address you used when you created your account. You will receive instructions to reset your password in your mail box.</p>
            <form>
              <div className="form-group">
                <input type="email" className={classes.FormControl} id="email" placeholder="Enter email" name="email" onChange={(event) => updateInput(event)} />
              </div>
              <button type="submit" className={classes.Btn} onClick={(event => validateUserData(event))}>Request reset link</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default ResetPassword;
export default connect(() => ({}), { passwordResetRequest })(ResetPassword);
