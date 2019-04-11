import React from 'react';
import PropTypes from 'prop-types';

/**
 * A function representing an Image Button
 *
 * @param {object} props - The button props
 * @returns {JSX.Element} DOM element
 */
const SocialButton = ({ icon, altText, onClick }) => (
  <button type="button" className="btn" onClick={onClick}>
    <img src={icon} alt={altText} />
  </button>
);

SocialButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  altText: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

SocialButton.defaultProps = {
  altText: '',
};

export default SocialButton;
