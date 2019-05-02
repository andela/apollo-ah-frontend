import { createSelector } from 'reselect';

/**
 * Selectors for retreiving follow related states
 * @param {object} state A reference to the state in the redux store
 */
export const followers = state => state.follow.followers;
export const following = state => state.follow.following;
export const followIsLoading = state => state.follow.isLoading;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getFollowers = createSelector(followers, users => users);
export const getFollowing = createSelector(following, users => users);
export const getFollowIsLoading = createSelector(followIsLoading, loading => loading);
