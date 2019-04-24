/* eslint-disable jsx-a11y/anchor-is-valid */
import { combineReducers } from 'redux';

// Reducers
import reduceReducers from 'reduce-reducers';
import resetPasswordReducer from './resetPasswordReducer';
import loginReducers from './loginReducers';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import profileReducer from './profileReducer';
import singleArticleReducer from './singleArticleReducer';
import clapsReducer from './clapsReducer';


/**
 * @function combineReducers - the redux store combineReducers function
 * @exports Object - The combination of reducers across the app
 */

const userReducer = reduceReducers(loginReducers, resetPasswordReducer, profileReducer);

export default combineReducers({
  user: userReducer,
  articlesReducer,
  articlesCategoryReducer,
  article: singleArticleReducer,
  userClaps: clapsReducer,
});
