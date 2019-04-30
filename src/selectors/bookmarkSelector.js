import { createSelector } from 'reselect';

/**
 * @param {*} state - The initial state from the redux store
 */

const getBookmarkedArticlesSelector = state => state.bookmarkedList.bookmarked;

const bookmarkedArticles = createSelector(getBookmarkedArticlesSelector, bookmarked => bookmarked);

export default bookmarkedArticles;
