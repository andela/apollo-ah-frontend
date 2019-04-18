import { createSelector } from 'reselect';

/**
 * Selectors used for reset password
 * @param {object} state A reference to the state in the redux store
 */
export const resetLoadingSelector = state => state.user.resetPassword.loading;
export const resetMessageSelector = state => state.user.resetPassword.message;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getResetPassswordLoading = createSelector(resetLoadingSelector, status => status);
export const getResetPasswordMessage = createSelector(resetMessageSelector, message => message);
