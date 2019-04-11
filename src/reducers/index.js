/* eslint-disable jsx-a11y/anchor-is-valid */
import { combineReducers } from 'redux';

// Reducers
import social from './socialReducer';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';

export default combineReducers({
  social,
  articlesReducer,
  articlesCategoryReducer,
});
