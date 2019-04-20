import request from '../utils/request';
import typeGenerator from './typeGenerator';

/**
 * Generate action types for fetching comments
 * @returns {object} An object with the corresponding loading, success, failure keys
 */
export const getCommentTypes = typeGenerator('GET_COMMENTS');

/**
 * Generate action types for posting comments
 * @returns {object} An object with the corresponding loading, success, failure keys
 */
export const postCommentTypes = typeGenerator('POST_COMMENTS');

/**
 * Action creator to get and post comments
 * @param {string} type The dispatch type
 * @param {object} data The data to dispatch
 * @returns {object} The generated action object
 */
export const commentsAction = (type, data) => ({ type, data });

/**
 * The action to dispatch to fetch comments from the backend
 * @param {object} payload The payload containing the comment, current page, and authorization token
 * @returns {object} The promise object
 */
// export const getComments = payload => async (dispatch) => {
//   dispatch(commentsAction(getCommentTypes.loading, true));
//   return request({
//     route: `${payload.slug}/comments?size=10&page=${payload.page}`,
//     token: payload.token
//   }).then((response) => {
//     dispatch(commentsAction(getCommentTypes.success, response.data.data));
//   }).catch((error) => {
//     let errorMessage = 'Please check your network connection';
//     if (error.response) {
//       const { message } = error.response.data;
//       errorMessage = message;
//     }
//     dispatch(commentsAction(getCommentTypes.failure, errorMessage));
//   });
// };

/**
 * The action to dispatch to post comments
 * @param {object} payload The payload containing the comment, and authorization token
 * @returns {object} The promise object
 */
export const postComment = payload => async (dispatch) => {
  dispatch(commentsAction(postCommentTypes.loading, true));
  return request({
    route: `articles/${payload.slug}/comments`,
    token: payload.token,
    method: 'post',
    payload: { body: payload.body }
  }).then((response) => {
    const { data } = response.data;
    data.profile = payload.profile;
    dispatch(commentsAction(postCommentTypes.success, data));
  }).catch((error) => {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    dispatch(commentsAction(postCommentTypes.failure, errorMessage));
  });
};
