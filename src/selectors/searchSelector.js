import { createSelector } from 'reselect';

/**
 * Selectors used for fetching articles to display on the search component
 * @param {object} state A reference to the state in the redux store
 */
export const searchSelector = state => state.searchResult;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getSearchResult = createSelector(searchSelector, result => result);
