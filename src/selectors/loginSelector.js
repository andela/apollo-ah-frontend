import { createSelector } from 'reselect';

/**
 * @param {*} state - The initial state from the redux store
 */
const loginStatusSelector = state => state.user.loginStatus;
const loginMessageSelector = state => state.user.message;
const loginIsLoadingSelector = state => state.user.isLoading;

export const getLoginStatus = createSelector(loginStatusSelector, status => (status ? 'success' : 'failure'));
export const getLoginMessage = createSelector(loginMessageSelector, message => message);
export const getLoginIsLoading = createSelector(loginIsLoadingSelector, isLoading => isLoading);
