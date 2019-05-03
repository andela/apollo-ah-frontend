import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CommentBox from '../views/CommentBox';
import CommentForm from '../views/CommentForm';
import { postComment, getComments, clearComments } from '../actions/commentsAction';
import { postLikeComment, postDislikeComment } from '../actions/likeCommentsAction';
import { getToken, getProfile } from '../selectors/profileSelector';
import * as selectors from '../selectors/commentsSelector';
import { getIsLoggedIn } from '../selectors/navbarSelector';
import CommentLoader from '../views/CommentLoader';
import { getDisplayDate } from '../utils/helpers';
/**
 * Container component for the adding and viewing commments
 * @class CommentsContainer
 * @extends {Component}
 */
class CommentsContainer extends Component {
  state = {
    newComments: [],
    oldComments: [],
    body: '',
    page: 1,
    articleSlug: '',
  };

  componentDidMount() {
    const { clearComments: resetComments } = this.props;
    resetComments();
    this.handleGetComments();
  }

  static getDerivedStateFromProps(nextProps) {
    const { slug } = nextProps;
    return { articleSlug: slug };
  }

  /**
 * Appends a new comment item to the comments list
 * @memberof CommentsContainer
 * @returns {void}
 */
  createCommentItems = (comments) => {
    const result = comments.map((comment) => {
      const date = getDisplayDate(comment.createdAt);
      const { Profile: { firstname, username, image } } = comment.author;
      const { articleSlug } = this.state;
      return (
        <CommentBox
          key={comment.id}
          body={comment.body}
          authorImage={image}
          authorName={firstname || username}
          date={date.short}
          fullDate={date.long}
          id={comment.id}
          articleSlug={articleSlug}
          handleLikes={this.handleLikes}
          handleDislikes={this.handleDislikes}
          likeCount={comment.likes}
          dislikeCount={comment.dislikes}
        />
      );
    });
    return result;
  }

  /**
   * Increases the page number used for pagination
   * @memberof CommentsContainer
   * @returns {void}
   */
  increasePageNumber = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  }

  /**
   * Adds a new comment to the current article
   * @param {object} event The event object
   * @memberof CommentsContainer
   * @returns {void}
   */
  handlePostComment = async (event) => {
    event.preventDefault();
    const { body } = this.state;
    if (body.trim().length === 0) return;
    const {
      token, profile, sendComment, slug, hasMoreComments
    } = this.props;
    const payload = {
      token, profile, slug, body,
    };
    await sendComment(payload);
    if (!hasMoreComments) {
      this.updateCommentsList('newCommentList', 'newComments');
    }
    this.clearComment();
  }

  /**
   * Fetches list of comments for the current article
   * @memberof CommentsContainer
   * @returns {void}
   */
  handleGetComments = async () => {
    const { page } = this.state;
    const { slug, fetchComment } = this.props;
    const payload = { page, slug };
    await fetchComment(payload);
    if (this.updateCommentsList('oldCommentList', 'oldComments')) {
      this.increasePageNumber();
    }
  }

  /**
   * Helper function to create new comment box and add to the current list of comments
   * @param {string} newValue The key of the new comments in the props object
   * @param {string} prevValue The key of the current comments in the state local state object
   * @memberof CommentsContainer
   * @returns {boolean} True if new comments where added, false otherwise
   */
  updateCommentsList = (newValue, prevValue) => {
    const { props, state } = this;
    const newList = props[newValue];
    const oldList = state[prevValue];
    const commentItems = this.createCommentItems(newList);
    this.setState({
      [prevValue]: [...oldList, ...commentItems]
    });
    return newList.length > 0;
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

  handleLikes = ({ id, slug }) => {
    const { postLikeComment: likeComment } = this.props;
    likeComment({ id, slug });
  }

  handleDislikes = ({ id, slug }) => {
    const { postDislikeComment: dislikeComment } = this.props;
    dislikeComment({ id, slug });
  }

  render() {
    const {
      postingComment,
      gettingComments,
      commentMessage,
      hasMoreComments,
      remainingComments,
      isLoggedIn
    } = this.props;
    const { newComments, oldComments, body } = this.state;
    return (
      <>
        <div className="comment-grp card">
          {oldComments}
          {gettingComments && <CommentLoader />}
          {(hasMoreComments && !gettingComments) && (
            <button
              onClick={this.handleGetComments}
              type="button"
              className="loadmore-grp btn btn-secondary">
              <span className="text">
                Load more(
                {remainingComments}
                )
              </span>
            </button>
          )}
          {newComments}
        </div>
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
  gettingComments: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  hasMoreComments: PropTypes.bool.isRequired,
  commentMessage: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired,
  remainingComments: PropTypes.number.isRequired,
  fetchComment: PropTypes.func.isRequired,
  clearComments: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  postLikeComment: PropTypes.func.isRequired,
  postDislikeComment: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    token: getToken,
    profile: getProfile,
    newCommentList: selectors.getNewComment,
    postingComment: selectors.getPostingComment,
    gettingComments: selectors.getFetchingComment,
    isLoggedIn: getIsLoggedIn,
    oldCommentList: selectors.getCommentList,
    commentMessage: selectors.getCommentMessage,
    hasMoreComments: selectors.getHasMoreComments,
    remainingComments: selectors.getRemainingComments
  }
);
const mapDispatchToProps = dispatch => ({
  sendComment: payload => dispatch(postComment(payload)),
  fetchComment: payload => dispatch(getComments(payload)),
  clearComments: () => dispatch(clearComments()),
  postLikeComment: payload => dispatch(postLikeComment(payload)),
  postDislikeComment: payload => dispatch(postDislikeComment(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
