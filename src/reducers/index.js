import { combineReducers } from 'redux';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import signupReducer from './signupReducer';

export default combineReducers({
  articlesReducer,
  articlesCategoryReducer,
  signupReducer,
});
