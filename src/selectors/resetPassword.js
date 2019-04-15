import { createSelector } from 'reselect';

/**
 * Selectors used for reset password
 * @param {object} state A reference to the state in the redux store
 */
export const resetPasswordLoadingSelector = state => state.user.resetPassword.loading;
export const resetPasswordMessageSelector = state => state.user.resetPassword.message;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getResetPassswordLoading = createSelector(resetPasswordLoadingSelector, status => status);
export const getResetPasswordMessage = createSelector(resetPasswordMessageSelector, message => message );