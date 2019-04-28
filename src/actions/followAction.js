import typeGenerator from './typeGenerator';
import request from '../utils/request';
import exceptionHandler from '../utils/exceptionHandler';
import newToast from './toastAction';

export const followType = typeGenerator('FOLLOW_USER');
export const unfollowType = typeGenerator('UNFOLLOW_USER');
export const getFollowersType = typeGenerator('GET_FOLLOWERS');
export const getFollowingType = typeGenerator('GET_FOLLOWING');

/**
 * Action creator that is dispatched when request is made
 *
 * @param {boolean} payload - The loading state
 * @returns {object} - Returns an action object
 */
export const followLoading = payload => ({
  type: followType.loading,
  payload,
});

/**
 * Action creator that is dispatched when user is successfully followed
 *
 * @param {object} payload - The followed user
 * @returns {object} - Returns an action object
 */
export const followSuccess = payload => ({
  type: followType.success,
  payload,
});

/**
 * Action creator that is dispatched when follow request fails
 *
 * @param {object} error - The error object
 * @returns {object} - Returns an action object
 */
export const followFailure = error => ({
  type: followType.failure,
  payload: { error }
});

/**
 * Action creator that is dispatched when user is successfully unfollowed
 *
 * @param {object} payload - The unfollowed user
 * @returns {object} - Returns an action object
 */
export const unFollowSuccess = payload => ({
  type: unfollowType.success,
  payload,
});

/**
 * Follow action handler
 *
 * @export
 * @param {string} requestType - The request type (follow or unfollow)
 * @param {string} username - The username to follow/unfollow
 * @returns {object} - Returns an actions object
 */
export const followUserAction = (requestType, username) => async (dispatch) => {
  dispatch(followLoading(true));
  try {
    const response = await request({
      route: `profiles/${username}/${requestType}`,
      method: 'POST'
    });
    const { data, message } = response.data;
    dispatch(newToast(message));
    if (requestType === 'follow') {
      dispatch(followSuccess(data));
    }
    dispatch(unFollowSuccess(data));
  } catch (error) {
    const errorData = exceptionHandler(error);
    dispatch(followFailure(errorData));
  }
};

/**
 * Action creator that is dispatched when get followers is successful
 *
 * @param {object} payload - A list of followers
 * @returns {object} - Returns an action object
 */
export const getFollowersSuccess = payload => ({
  type: getFollowersType.success,
  payload,
});

/**
 * Action creator that is dispatched when get following is successful
 *
 * @param {object} payload - A list of following
 * @returns {object} - Returns an action object
 */
export const getFollowingSuccess = payload => ({
  type: getFollowingType.success,
  payload,
});

/**
 * Followers action handler
 *
 * @export
 * @param {string} type - A type of followers or following
 * @returns {object} - Returns an actions object
 */
export const fetchFollowersAction = type => async (dispatch) => {
  dispatch(followLoading(true));
  try {
    const response = await request({ route: `profiles/${type}` });
    const { data } = response.data;
    if (followType === 'followers') dispatch(getFollowersSuccess(data));
    else dispatch(getFollowingSuccess(data));
  } catch (error) {
    const errorData = exceptionHandler(error);
    dispatch(followFailure(errorData));
  }
};
