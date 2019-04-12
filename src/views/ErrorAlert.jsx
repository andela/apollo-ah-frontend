import React from 'react';


class ErrorAlert extends React.Component {
 
  render() {
    if (! this.props.message) {
      return (
        ''
      );
    }
    const { message } = this.props.message;
    return (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> { message }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.props.close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default ErrorAlert;