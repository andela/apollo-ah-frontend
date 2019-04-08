import { combineReducers } from 'redux';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';

export default combineReducers({
  articlesReducer,
  articlesCategoryReducer,
});
