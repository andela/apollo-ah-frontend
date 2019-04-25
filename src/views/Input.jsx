import React from 'react';
import propTypes from 'prop-types';

export default function Input(props) {
  const { name, display, onChange } = props;
  return (
    <div className="form-group mb-4">
      <label htmlFor={name} className="font-weight-bold">{display}</label>
      <input type="text" className="form-control" id={name} name={name} onChange={onChange} />
    </div>
  );
}
Input.propTypes = {
  name: propTypes.string.isRequired,
  display: propTypes.string.isRequired,
  onChange: propTypes.func
};
