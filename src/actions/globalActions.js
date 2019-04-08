import {
  TRIGGER_AUTHENTICATED,
  TRIGGER_ERROR,
} from './actionTypes';

/**
 * Triggers global error state
 *
 * @param {object} error - The error object
 * @returns {object} - Returns an action object
 */
export const globalError = error => ({
  type: TRIGGER_ERROR,
  error
});

/**
 * Triggers authenticated state for current user
 *
 * @param {boolean} isAuthenticated - The user authenticated state
 * @returns {object} - Returns an action object
 */
export const globalAuthenticated = isAuthenticated => ({
  type: TRIGGER_AUTHENTICATED,
  isAuthenticated
});

export default {};
