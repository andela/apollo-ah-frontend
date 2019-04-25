import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * @returns {JSX} - The JSX representation of the article's tags
 *
 */
function Tag({ tag }) {
  return (
    <Link to={`/search?tag=${tag.tagName}`} className="badge">
      {tag.tagName}
    </Link>
  );
}
Tag.propTypes = {
  tag: PropTypes.object.isRequired,
};

export default Tag;
