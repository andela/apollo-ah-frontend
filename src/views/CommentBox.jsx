import React from 'react';
import { PropTypes } from 'prop-types';

export default function CommentBox({
  author, time, body, profileImage
}) {
  return (
    <div className="article-author">
      <img src={profileImage} alt={author} />
      <div>
        <h6>{author}</h6>
        <span>{time}</span>
        <p>{body}</p>
      </div>
    </div>

  );
}

CommentBox.propTypes = {
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};
