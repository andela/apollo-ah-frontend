import { combineReducers } from 'redux';

// Reducers
import { reducer as toastr } from 'react-redux-toastr';
import globalReducer from './globalReducer';

export default combineReducers({
  global: globalReducer,
  toastr,
});
