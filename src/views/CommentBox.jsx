import React from 'react';
import { PropTypes } from 'prop-types';


/**
 * Creates the JSX element used to display a single comment
 * @param {object} props The component props
 * date - Short format representation of the date the comment was made
 * body - The comment body
 * authorImage - The profile image of the  user
 * authorName - The firstname or username of the user
 * fullDate - Long format representation of the date the comment was made
 * @returns {Node} The generated JSX element
 */
export default function CommentBox({
  date, body, authorImage, authorName, fullDate
}) {
  return (
    <div className="article-author">
      <img src={authorImage} alt={authorName} />
      <div>
        <h6>{authorName}</h6>
        <span title={fullDate}>{date}</span>
        <p>{body}</p>
      </div>
    </div>

  );
}

/** Prop types declaration */
CommentBox.propTypes = {
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  fullDate: PropTypes.string.isRequired,
};
