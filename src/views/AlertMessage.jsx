import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 *
 * @param {*} {props} - Properties passed in from the parent component
 * @returns {JSX} - The JSX that will represent the alert message on the UI
 */
function AlertMessage(props) {
  const { resetState, status, notification } = props;
  return (
    <div>
      <p
        className={
          `alert ${(status === 'success') ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`
        }
        role="alert"
      >
        {notification}
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={resetState}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </p>
    </div>
  );
}

AlertMessage.propTypes = {
  notification: PropTypes.string,
  resetState: PropTypes.func,
  status: PropTypes.string,
};

AlertMessage.defaultProps = {
  notification: '',
  resetState: f => f,
  status: '',
};

export default AlertMessage;
