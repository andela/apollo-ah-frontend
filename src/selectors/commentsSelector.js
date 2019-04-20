import { createSelector } from 'reselect';

/**
 * Selectors used for posting comments
 * @param {object} state A reference to the state in the redux store
 */
export const postingCommentSelector = state => state.article.postingComment;
export const newCommentSelector = state => state.article.newComments;
export const commentMessageSelector = state => state.article.commentMessage;

/**
 * Selectors used for fetchin comments
 * @param {object} state A reference to the state in the redux store
 */
export const gettingCommentsSelector = state => state.article.gettingComments;
export const commentListSelector = state => state.article.oldComments;
export const commentPageSelector = state => state.article.commentPage;
export const hasMoreCommentsSelector = state => state.article.hasMoreComments;


/**
 * Selectors created by the reselect library for memoized functions
 */
export const getPostingComment = createSelector(postingCommentSelector, status => status);
export const getNewComment = createSelector(newCommentSelector, comment => comment);
export const getCommentMessage = createSelector(commentMessageSelector, message => message);
export const getFetchingComment = createSelector(gettingCommentsSelector, status => status);
export const getCommentList = createSelector(commentListSelector, list => list);
export const getRemainingComments = createSelector(commentPageSelector,
  page => page.totalCount - (page.currentCount * page.current));
export const getHasMoreComments = createSelector(hasMoreCommentsSelector, more => more);
