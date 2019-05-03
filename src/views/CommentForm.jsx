
import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Creates the JSX element used to display a form with input to post a new comment
 * @param {object} props The component props
 * handleInputChange -  The function to bind the input field to the corresponding state value
 * handlePostComment - The function to execute to post a comment
 * postingComment - A boolean keeping track of the status of the post comment action
 * body - The value of the input field
 * isLoggedIn - Used to force unauthenticated users from entering comments
 * @returns {Node} The generated JSX element
 */
export default function PostComment({
  handlePostComment,
  postingComment,
  handleInputChange,
  body,
  isLoggedIn,
}) {
  return (
    <div className="comment-grp card mt-3 relative">
      <form className={`form${postingComment ? ' busy' : ''}`} onSubmit={handlePostComment}>
        <div className="form-group">
          <input className="form-control" autoComplete="off" disabled={postingComment} placeholder="Leave a comment" name="body" onChange={handleInputChange} value={body} />
          <button type="submit" className="btn btn-link" disabled={postingComment}>
            <i className="fas fa-paper-plane" />
            <span className="spinner-grow text-dark" />
          </button>
        </div>
      </form>
      {!isLoggedIn && <Link to="/login" className="link-surface" />}
    </div>
  );
}

/** PropTypes declarations */
PostComment.propTypes = {
  handlePostComment: PropTypes.func.isRequired,
  postingComment: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
