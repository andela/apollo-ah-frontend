import axios from 'axios';
import actionTypeGenerator from './typeGenerator';

export const updatePasswordType = actionTypeGenerator('UPDATE_PASSWORD');

/**
 * Action generator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */
export const updatePasswordLoading = () => ({
  type: updatePasswordType.loading,
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const updatePasswordSuccess = message => ({
  type: updatePasswordType.success,
  message,
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const clearUpdatePasswordState = () => ({
  type: updatePasswordType.clear,
});

/**
 * Action generator that is dispatched when operation fails
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const updatePasswordFailure = message => ({
  type: updatePasswordType.failure,
  message,
});

export const updatePassword = (
  token,
  password,
  confirmPassword,
  email
) => async (dispatch) => {
  dispatch(updatePasswordLoading());
  try {
    const { data } = await axios.patch(
      `${process.env.API_BASE_URL}/users/reset_password?token=${token}`,
      { password, confirmPassword, email }
    );
    dispatch(updatePasswordSuccess(data.message));
  } catch (error) {
    if (
      error.response.data.message === 'Your request to reset password has expired. Please try again'
    ) {
      const info = 'Your request to reset password has expired.';
      dispatch(updatePasswordFailure(info, error.response));
    }
  }
};
