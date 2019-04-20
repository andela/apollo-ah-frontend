import { combineReducers } from 'redux';

// Reducers
import reduceReducers from 'reduce-reducers';
import resetPasswordReducer from './resetPasswordReducer';
import loginReducers from './loginReducers';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import profileReducer from './profileReducer';
import { postCommentReducer } from './commentsReducer';


/**
 * @function userReducer,artilceReducer reducers used to combine multiple reducers
 * to a single key in the redux store
 */
const userReducer = reduceReducers(loginReducers, resetPasswordReducer, profileReducer);
const articleReducer = reduceReducers(postCommentReducer);

/**
 * @function combineReducers - the redux store combineReducers function
 */
export default combineReducers({
  user: userReducer,
  article: articleReducer,
  articlesReducer,
  articlesCategoryReducer,
});
