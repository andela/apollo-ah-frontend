import { createSelector } from 'reselect';

const isAuthenticated = state => state.social.isAuthenticated;

export const getIsAuthenticated = createSelector(isAuthenticated, (auth) => auth);

export default {};
