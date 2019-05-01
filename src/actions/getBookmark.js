import request from '../utils/request';
import actionTypeGenerator from './typeGenerator';

export const getBookmarkType = actionTypeGenerator('GET_BOOKMARK');

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const getBookmarkAction = (type, payload) => ({
  type,
  payload,
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
let requestUrl;
export const getBookmarkedArticles = (page, size) => async (dispatch) => {
  dispatch(getBookmarkAction(getBookmarkType.loading, true));

  if (!page || !size) {
    requestUrl = 'bookmarks?page=1&size=6';
  } else {
    requestUrl = `/bookmarks?page=${page}&size=${size}`;
  }
  return request({
    route: requestUrl,
  }).then((response) => {
    dispatch(getBookmarkAction(getBookmarkType.success, response.data.data));
  }).catch((error) => {
    let errorData = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorData = message;
    }
    dispatch(getBookmarkAction(getBookmarkType.failure, errorData));
  });
};
