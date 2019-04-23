import request from '../utils/request';
import actionTypeGenerator from './typeGenerator';

export const getBookmarkType = actionTypeGenerator('GET_BOOKMARK');

/**
 * Action generator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */
export const getBookmarkLoading = () => ({
  type: getBookmarkType.loading,
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const getBookmarkSuccess = payload => ({
  type: getBookmarkType.success,
  payload,
});

/**
 * Action generator that is dispatched when operation fails
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const getBookmarkFailure = message => ({
  type: getBookmarkType.failure,
  message,
});

/**
 * reset password action creator
 *
 * @export
 * @param string email - user's email address
 * @returns {object}
 */

/**
 * The action that is called when the user wants to get a list of bookmarked articles
 * @param {object} payload The payload to send with the request
 * @returns {Promise} The promise returned from the request
 */
export const getBookmarkedArticles = payload => async (dispatch) => {
  dispatch(getBookmarkLoading(true));
  return request({
    route: 'bookmarks',
    payload,
    token: payload.token
  }).then((response) => {
    dispatch(getBookmarkSuccess(response.data.data));
  }).catch((error) => {
    let errorData = ['Please check your network connection'];
    if (error.response) {
      const { message, data } = error.response.data;
      errorData = [message, data];
    }
    dispatch(getBookmarkFailure(errorData));
  });
};

export default getBookmarkedArticles;
