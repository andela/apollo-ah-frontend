import { createSelector } from 'reselect';

/**
 * Selectors used for creating an article
 * @param {object} state A reference to the state in the redux store
 */
export const createArticleLoading = state => state.createArticle.loading;
export const createArticleMessage = state => state.createArticle.message;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getCreateArticleLoading = createSelector(createArticleLoading, status => status);
export const getCreateArticleMessage = createSelector(createArticleMessage, message => message);
