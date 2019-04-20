import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import formatDate from 'date-fns/format';
import CommentBox from '../views/CommentBox';
import CommentForm from '../views/CommentForm';
import { postComment } from '../actions/commentsAction';
import { getToken, getProfile } from '../selectors/profileSelector';
import { getNewComment, getPostingComment, getCommentMessage } from '../selectors/commentsSelector';
import { getIsLoggedIn } from '../selectors/navbarSelector';

/**
 * Container component for the adding and viewing commments
 * @class CommentsContainer
 * @extends {Component}
 */
class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComments: [],
      oldComments: [],
      body: '',
    };
  }


  /**
 * Appends a new comment item to the comments list
 * @memberof CommentsContainer
 * @returns {void}
 */
  addNewComment = () => {
    const { newComment } = this.props;
    const { newComments } = this.state;
    const commentItem = (
      <CommentBox
    key={newComment.id}
    body={newComment.body}
    authorImage={newComment.authorImage}
    authorName={newComment.authorName}
    date="1min"
    fullDate={formatDate(new Date(), 'MMM Do, YYYY h:mma')}
     />
    );
    this.setState({
      newComments: [...newComments, commentItem],
    });
  }

  /**
   * Adds a new comment to the current artilce
   * @param {object} event The event object
   * @memberof CommentsContainer
   * @returns {void}
   */
  handlePostComment = async (event) => {
    event.preventDefault();
    const { body } = this.state;
    if (body.trim().length === 0) return;
    const {
      token,
      profile,
      sendComment,
      slug,
    } = this.props;
    const payload = {
      token,
      profile,
      slug,
      body,
    };
    await sendComment(payload);
    this.addNewComment();
    this.clearComment();
  }

  /**
 * Clears the comment form's input field
 * @memberof CommentsContainer
 * @returns {void}
 */
  clearComment = () => {
    this.setState({
      body: ''
    });
  }

/**
 * Binds the form input field to the local state values
 * @param {object} event event listener object
 * @memberof CommentsContainer
 * @returns {void}
 */
handleInputChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
}

render() {
  const {
    postingComment,
    commentMessage,
    more,
    isLoggedIn
  } = this.props;
  const { newComments, oldComments, body } = this.state;
  return (
    <>
      {(newComments.length > 0 || oldComments.length > 0)
                && (
                <div className="comment-grp card">
                  {oldComments}
                  { more && (
                  <button type="button" className="loadmore-grp btn btn-secondary">Load more...</button>
                  )}
                  {newComments}
                </div>
                )
        }
      <CommentForm
          handlePostComment={this.handlePostComment}
          postingComment={postingComment}
          commentMessagef={commentMessage}
          handleInputChange={this.handleInputChange}
          body={body}
          isLoggedIn={isLoggedIn}
          />
    </>

  );
}
}

/** Proptype validation */
CommentsContainer.propTypes = {
  token: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  postingComment: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  // comments: PropTypes.array.isRequired,
  more: PropTypes.bool,
  newComment: PropTypes.object.isRequired,
  commentMessage: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};


CommentsContainer.defaultProps = {
  more: false,
};

const mapStateToProps = createStructuredSelector(
  {
    token: getToken,
    profile: getProfile,
    newComment: getNewComment,
    commentMessage: getCommentMessage,
    postingComment: getPostingComment,
    isLoggedIn: getIsLoggedIn
  }
);
const mapDispatchToProps = dispatch => ({
  sendComment: payload => dispatch(postComment(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
