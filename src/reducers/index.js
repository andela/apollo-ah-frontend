import { combineReducers } from 'redux';
import sample from './sample';
import resetPasswordReducer from './resetPasswordReducer';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';

export default combineReducers({
  resetPasswordReducer,
  sample,
  articlesReducer,
  articlesCategoryReducer,
});
