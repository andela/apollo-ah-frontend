import { createSelector } from 'reselect';

export const articleSelector = state => state.articlesReducer.article;

export const getArticle = createSelector(articleSelector, article => article);
