import { createSelector } from 'reselect';

const isAuthenticated = state => state.user.isLoggedIn;

export const getIsAuthenticated = createSelector(isAuthenticated, (auth) => auth);

export default {};
