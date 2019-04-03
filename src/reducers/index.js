import { combineReducers } from 'redux';
import sample from './sample';
import resetPasswordReducer from './resetPasswordReducer';

export default combineReducers({
  resetPasswordReducer,
  sample,
});
