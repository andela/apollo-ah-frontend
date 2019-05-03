import request from '../utils/request';
import typeGenerator from './typeGenerator';
import exceptionHandler from '../utils/exceptionHandler';

export const profileTypes = typeGenerator('PROFILE');

/**
 * Action generator that is dispatched when user is updating their profile
 * @param {boolean} status The current status of the operation
 * @returns {object} The action to dispatch
 */
export const updatingProfile = status => ({
  type: profileTypes.loading,
  status
});

/**
 * Action generator that is dispatched when user successfully updates their profile
 * @param {array} data The updated user profile
 * @returns {object} The action to dispatch
 */
export const updateProfileSuccessful = data => ({
  type: profileTypes.success,
  data
});

/**
 * Action generator that is dispatched if there was problem updating the user profile
 * @param {array} data An array containing the list of error messages
 * @returns {object} The action to dispatch
 */
export const updateProfileFailure = data => ({
  type: profileTypes.failure,
  data,
});

/**
 * The action that is called when the user attempts update their profile
 * @param {object} payload The payload to send with the request
 * @returns {Promise} The promise returned from the request
 */
export const updateUserProfile = payload => async (dispatch) => {
  dispatch(updatingProfile(true));
  return request({
    route: 'profiles',
    method: 'post',
    payload,
    token: payload.token
  }).then((response) => {
    dispatch(updateProfileSuccessful(response.data.data));
  }).catch((error) => {
    const errorData = exceptionHandler(error);
    dispatch(updateProfileFailure(errorData));
  });
};
