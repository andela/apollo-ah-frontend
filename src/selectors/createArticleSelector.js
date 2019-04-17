import { createSelector } from 'reselect';

/**
 * Selectors used for creating an article
 * @param {object} state A reference to the state in the redux store
 */
export const createArticleLoadingSelector = state => state.createArticle.loading;
export const createArticleMessageSelector = state => state.createArticle.message;
export const tokenSelector = state => state.user.token;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getCreateArticleLoadingState = createSelector(createArticleLoadingSelector, status => status);
export const getCreateArticleMessageState = createSelector(createArticleMessageSelector, message => message);
export const getUserToken = createSelector(tokenSelector, token => token);