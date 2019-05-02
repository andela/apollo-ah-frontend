import { createSelector } from 'reselect';

/**
 * Selectors used for creating getting bookmarks
 * @param {object} state A reference to the state in the redux store
 */
export const bookmarkLoading = state => state.bookmark.loading;
export const bookmarkArticles = state => state.bookmark.articles.articles;
export const bookmarkLastPage = state => state.bookmark.page.last;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getBookmarkLoading = createSelector(bookmarkLoading, status => status);
export const getBookmarkArticles = createSelector(bookmarkArticles, articles => articles);
export const getLastPage = createSelector(bookmarkLastPage, last => last);
