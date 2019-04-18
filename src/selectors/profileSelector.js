import { createSelector } from 'reselect';

/**
 * Selectors used for updating the user profile
 * @param {object} state A reference to the state in the redux store
 */
export const updatingProfileSelector = state => state.user.profile.loading;
export const errorDataSelector = state => state.user.profile.errorData;
export const tokenSelector = state => state.user.token;
export const profileSelector = state => state.user.profile;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getUpdatingProfile = createSelector(updatingProfileSelector, status => status);
export const getErrorData = createSelector(errorDataSelector, errorData => errorData);
export const getToken = createSelector(tokenSelector, token => token);
export const getProfile = createSelector(profileSelector, profile => profile);
