import { createSelector } from 'reselect';

const isAuthenticated = state => state.user.isLoggedIn;
const authId = state => state.user.id;
const authUsername = state => state.user.profile.username;

export const getIsAuthenticated = createSelector(isAuthenticated, auth => auth);
export const getAuthId = createSelector(authId, userId => userId);
export const getAuthUsername = createSelector(authUsername, username => username);
