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
    const payload = verifyToken(token);
    payload.token = token;
    localStorage.setItem('user', JSON.stringify(payload));
    return dispatch(authenticationSuccess(true));
  } catch (error) {
    return dispatch(authenticationFailure(error.message));
  }
};

/**
 * Triggers authentication success
 *
 * @param {boolean} isAuthenticated - The user authenticated state
 * @returns {object} - Returns an action object
 */
export const authenticationSuccess = isAuthenticated => ({
  type: authenticationType.success,
  payload: { isAuthenticated }
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
