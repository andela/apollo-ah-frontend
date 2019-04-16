import { authenticationType } from './actionTypes';
import { verifyToken } from '../utils/helpers';

/**
 * Social login action handler
 *
 * @export
 * @param {object} token - The user token object
 * @returns {object} - Returns an actions object
 */
const socialLogin = token => dispatch => {
  try {
    const userData = verifyToken(token);
    const payload = {
      id: userData.id,
      email: userData.email,
      isLoggedIn: true,
      token,
    };
    return dispatch(authenticationSuccess(payload));
  } catch (error) {
    return dispatch(authenticationFailure(error.message));
  }
};

/**
 * Triggers authentication success
 *
 * @param {boolean} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const authenticationSuccess = payload => ({
  type: authenticationType.success,
  payload,
});

/**
 * Triggers authentication failure
 *
 * @param {boolean} error - The user authenticated state
 * @returns {object} - Returns an action object
 */
export const authenticationFailure = error => ({
  type: authenticationType.failure,
  payload: { error }
});

export default socialLogin;
