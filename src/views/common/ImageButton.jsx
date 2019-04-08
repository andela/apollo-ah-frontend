import React from 'react';
import PropTypes from 'prop-types';

/**
 * A function representing an Image Button
 *
 * @param {object} props - The button props
 * @returns {JSX.Element} DOM element
 */
const ImageButton = ({ imgSrc, onClick, altText }) => (
  <button type="button" className="btn" onClick={onClick}>
    <img src={imgSrc} alt={altText} />
  </button>
);

ImageButton.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  altText: PropTypes.string,
};

ImageButton.defaultProps = {
  altText: '',
};

export default ImageButton;
