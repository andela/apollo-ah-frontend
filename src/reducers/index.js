import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  loading: loadingReducer,
  user: profileReducer,
});
