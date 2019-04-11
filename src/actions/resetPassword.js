import axios from 'axios';
import actionCreator from './actionGenerator';

export const resetPassword = actionCreator('RESET_PASSWORD');


const apiUrl = process.env.API_BASE_URL;

/**
 * Action generator that is dispatched when user starts operation
 * @param {boolean} status The current status of the operation
 * @returns {object} The action to dispatch
 */
export const requestLoading = (loading, data) => ({
  type: resetPassword.loading,
  loading,
  data
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {array} data The updated user profile
 * @returns {object} The action to dispatch
 */
export const requestLoadingSuccess = (loading, data) => ({
  type: resetPassword.success,
  loading,
  data
});

/**
 * Action generator that is dispatched when operation fails
 * @param {array} data An array containing the list of error messages
 * @returns {object} The action to dispatch
 */
export const requestLoadingFailure = (loading, data) => ({
  type: resetPassword.failure,
  loading,
  data,
});

/**
 * reset password action creator
 *
 * @export
 * @param string email - user's email address
 * @returns {object}
 */

const passwordResetRequest = email => {
  return async (dispatch) => {
    dispatch(requestLoading(true, false));
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/users/forgot_password`, { email });
      dispatch(requestLoadingSuccess(false, data.message));
    } catch (error) {
      dispatch(requestLoadingFailure(false, error.response.data.data[0].message));
    }
  };
};

export default passwordResetRequest;
