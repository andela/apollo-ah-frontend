import { combineReducers } from 'redux';
import resetPasswordReducer from './resetPasswordReducer';
import loginReducers from './loginReducers';
import articlesReducer from './articleReducer';
import articlesCategoryReducer from './articleCategoryReducer';
import signupReducer from './signupReducer';

/**
 * @function combineReducers - the redux store combineReducers function
 * @exports Object - The combination of reducers across the app
 */
export default combineReducers({
  user: combineReducers({
    loginReducers,
    resetPassword: resetPasswordReducer,
  }),
  articlesReducer,
  articlesCategoryReducer,
  signupReducer,
});
