import { createSelector } from 'reselect';

/**
 * Selectors used for reset password
 * @param {object} state A reference to the state in the redux store
 */
export const updateLoadingSelector = state => state.user.updatePassword.loading;
export const updateMessageSelector = state => state.updatePassword.message;

/**
 * Selectors created by the reselect library for memoized functions
 */

export const getResetPassswordLoading = createSelector(updateLoadingSelector, status => status);
export const getUpdatePasswordMessage = createSelector(updateMessageSelector, message => message);
