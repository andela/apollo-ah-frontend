/* eslint-disable jsx-a11y/anchor-is-valid */
import { combineReducers } from 'redux';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';

// Reducers
import social from './socialReducer';

export default combineReducers({
  social,
  articlesReducer,
  articlesCategoryReducer,
});
