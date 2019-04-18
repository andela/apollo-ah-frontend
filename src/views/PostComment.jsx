
import React from 'react';
import { PropTypes } from 'prop-types';

export default function PostComment({ postComment }) {
  return (
    <form className="form" onSubmit={postComment}>
      <div className="form-group">
        <input className="form-control" placeholder="Leave a comment" name="body" />
        <button type="submit" className="btn btn-link">
          <i className="fas fa-paper-plane" />
        </button>
      </div>
    </form>

  );
}

PostComment.propTypes = {
  postComment: PropTypes.func.isRequired,
};
