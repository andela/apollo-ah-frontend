import { createSelector } from 'reselect';

/**
 * Selectors used for reset password
 * @param {object} state A reference to the state in the redux store
 */
export const resetPasswordSelector = state => state.resetPasswordReducer.isLoading;
export const messageSelector = state => state.resetPasswordReducer.responseMessage;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const submitResetPassword = createSelector(resetPasswordSelector, status => status);
export const getResponseMessage = createSelector(messageSelector, data => data );