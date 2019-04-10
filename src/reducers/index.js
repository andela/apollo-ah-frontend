import { combineReducers } from 'redux';

// Reducers
import globalReducer from './globalReducer';

export default combineReducers({
  global: globalReducer,
});
