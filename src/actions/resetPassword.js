import axios from 'axios';
import actionTypeGenerator from './typeGenerator';

export const resetPasswordType = actionTypeGenerator('RESET_PASSWORD');

/**
 * Action generator that is dispatched when user starts operatione
 * @returns {object} The action to dispatch
 */
export const resetPasswordLoading = () => ({
  type: resetPasswordType.loading,
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const resetPasswordSuccess = message => ({
  type: resetPasswordType.success,
  message
});

/**
 * Action generator that is dispatched when operation fails
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const resetPasswordFailure = message => ({
  type: resetPasswordType.failure,
  message,
});

/**
 * reset password action creator
 *
 * @export
 * @param string email - user's email address
 * @returns {object}
 */

const passwordResetRequest = email => async (dispatch) => {
  dispatch(resetPasswordLoading());
  try {
    const { data } = await axios.post(`${process.env.API_BASE_URL}/users/forgot_password`, { email });
    dispatch(resetPasswordSuccess(data.message));
  } catch (error) {
    let info = 'Please check your network connection';
    if (error.response) {
      info = error.response.data.data[0].message;
    }
    dispatch(resetPasswordFailure(info));
  }
};

export default passwordResetRequest;
