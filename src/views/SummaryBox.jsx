import React from 'react';
import PropTypes from 'prop-types';

export default function SummaryBox({ text, icon, value }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="summary">
          <h4 className="font-weight-bold">{value}</h4>
          <span>{text}</span>
          <i className={`fas fa-${icon}`} />
        </div>
      </div>
    </div>
  );
}
SummaryBox.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string
};
SummaryBox.defaultProps = {
  value: '0'
};
