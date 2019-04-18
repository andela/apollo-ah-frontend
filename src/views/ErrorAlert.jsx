import React from 'react';
import propTypes from 'prop-types';

/**
 * @class ErrorAlert
 * @extends { React }
 */
class ErrorAlert extends React.Component {
  render() {
    const { message, close } = this.props;
    if (!message) {
      return (
        ''
      );
    }
    return (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!    </strong>
        { message.message }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

ErrorAlert.propTypes = {
  message: propTypes.object,
  close: propTypes.func
};

export default ErrorAlert;
