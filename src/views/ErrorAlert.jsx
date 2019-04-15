import React from 'react';
import propTypes from 'prop-types';

class ErrorAlert extends React.Component {
 
  render() {
    if (! this.props.message) {
      return (
        ''
      );
    }
    const { message } = this.props.message;
    return (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> { message }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.props.close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

ErrorAlert.propTypes = {
  message: propTypes.object,
  close: propTypes.func.isRequired
};

export default ErrorAlert;