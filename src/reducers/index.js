import { combineReducers } from 'redux';

// Reducers
import reduceReducers from 'reduce-reducers';
import resetPasswordReducer from './resetPasswordReducer';
import loginReducers from './loginReducers';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import signupReducer from './signupReducer';
import createArticleReducer from './createArticleReducer';
import profileReducer from './profileReducer';
import reportArticleReducer from './reportArticleReducer';
import singleArticleReducer from './singleArticleReducer';
import clapsReducer from './clapsReducer';
import bookmarkArticleReducer from './bookmarkArticleReducer';
import { postCommentReducer, getCommentsReducer } from './commentsReducer';
import followerReducer from './followerReducer';

import dashboardReducer from './dashboardReducer';

/**
 * @function userReducer,artilceReducer reducers used to combine multiple reducers
 * to a single key in the redux store
 */
const userReducer = reduceReducers(
  loginReducers,
  resetPasswordReducer,
  profileReducer,
  signupReducer
);
const articleReducer = reduceReducers(
  postCommentReducer,
  getCommentsReducer,
  singleArticleReducer
);

/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: userReducer,
  article: articleReducer,
  createArticle: createArticleReducer,
  articlesReducer,
  articlesCategoryReducer,
  reportArticleReducer,
  userClaps: clapsReducer,
  bookmarkedList: bookmarkArticleReducer,
  signupReducer,
  follow: followerReducer,
  dashboard: dashboardReducer,
});
