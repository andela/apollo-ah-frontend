import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import resetPasswordReducer from './resetPasswordReducer';
import loginReducers from './loginReducers';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import profileReducer from './profileReducer';


/**
 * @function combineReducers - the redux store combineReducers function
 * @exports Object - The combination of reducers across the app
 */

const userReducer = reduceReducers(loginReducers, resetPasswordReducer, profileReducer);

export default combineReducers({
  user: userReducer,
  articlesReducer,
  articlesCategoryReducer,
});
