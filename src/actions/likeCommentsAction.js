import request from '../utils/request';
import typeGenerator from './typeGenerator';

/**
 * Generate action types for fetching comments
 * @returns {object} An object with the corresponding loading, success, failure keys
 */
export const postLikeCommentTypes = typeGenerator('LIKE_COMMENTS');
export const likeCommentsAction = (type, data) => ({ type, data });


/**
 * The action to dispatch to post comments
 * @param {object} payload The payload containing the comment, and authorization token
 * @returns {object} The promise object
 */
export const postLikeComment = payload => async (dispatch) => {
  const { slug, id } = payload;
  dispatch(likeCommentsAction(postLikeCommentTypes.loading, true));
  return request({
    route: `articles/${slug}/comments/${id}/likes`,
    method: 'post',
  }).then((response) => {
    const { data } = response.data;
    dispatch(likeCommentsAction(postLikeCommentTypes.success, data));
  }).catch((error) => {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    dispatch(likeCommentsAction(postLikeCommentTypes.failure, errorMessage));
  });
};

/**
 * The action to dispatch to post comments
 * @param {object} payload The payload containing the comment, and authorization token
 * @returns {object} The promise object
 */
export const postDislikeComment = payload => async (dispatch) => {
  const { slug, id } = payload;
  dispatch(likeCommentsAction(postLikeCommentTypes.loading, true));
  return request({
    route: `articles/${slug}/comments/${id}/dislikes`,
    method: 'post',
  }).then((response) => {
    const { data } = response.data;
    dispatch(likeCommentsAction(postLikeCommentTypes.success, data));
  }).catch((error) => {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    dispatch(likeCommentsAction(postLikeCommentTypes.failure, errorMessage));
  });
};
