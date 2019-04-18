import { createSelector } from 'reselect';

/**
 * Selectors used for updating the navigation bar
 * @param {object} state A reference to the state in the redux store
 */
export const isLoggedInSelector = state => state.user.isLoggedIn;
export const profileImageSelector = state => state.user.profile;


/**
 * Selectors created by the reselect library for memoized functions
 */
export const getIsLoggedIn = createSelector(isLoggedInSelector, status => status);
export const getProfile = createSelector(profileImageSelector, profile => profile);
