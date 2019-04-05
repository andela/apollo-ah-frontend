import { combineReducers } from 'redux';

import { updateProfileReducer, loadingReducer } from './updateProfileReducer';

export default combineReducers({
  loading: loadingReducer,  
  user: updateProfileReducer,
});
