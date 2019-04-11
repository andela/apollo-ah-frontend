import { combineReducers } from 'redux';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import profileReducer from './profileReducer';


export default combineReducers({
  articlesReducer,
  articlesCategoryReducer,
  user: profileReducer,
});
