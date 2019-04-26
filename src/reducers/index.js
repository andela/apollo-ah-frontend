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
import singleArticleReducer from './singleArticleReducer';
import clapsReducer from './clapsReducer';
import { postCommentReducer, getCommentsReducer } from './commentsReducer';


/**
 * @function userReducer,artilceReducer reducers used to combine multiple reducers
 * to a single key in the redux store
 */
const userReducer = reduceReducers(loginReducers, resetPasswordReducer, profileReducer);
const articleReducer = reduceReducers(postCommentReducer, getCommentsReducer, singleArticleReducer);

/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: userReducer,
  article: articleReducer,
  createArticle: createArticleReducer,
  articlesReducer,
  articlesCategoryReducer,
  userClaps: clapsReducer,
  signupReducer,
});
