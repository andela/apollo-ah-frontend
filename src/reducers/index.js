/* eslint-disable jsx-a11y/anchor-is-valid */
import { combineReducers } from 'redux';

// Reducers
import loginReducers from './loginReducers';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';

/**
 * @function combineReducers - the redux store combineReducers function
 * @exports Object - The combination of reducers across the app
 */
export default combineReducers({
  user: loginReducers,
  articlesReducer,
  articlesCategoryReducer,
});
