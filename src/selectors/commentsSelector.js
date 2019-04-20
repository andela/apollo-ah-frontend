import { createSelector } from 'reselect';

/**
 * Selectors used for posting comments
 * @param {object} state A reference to the state in the redux store
 */
export const postingCommentSelector = state => state.article.postingComment;
export const newCommentSelector = state => state.article.newComment;
export const commentMessageSelector = state => state.article.commentMessage;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getPostingComment = createSelector(postingCommentSelector, status => status);
export const getNewComment = createSelector(newCommentSelector, comment => comment);
export const getCommentMessage = createSelector(commentMessageSelector, message => message);
