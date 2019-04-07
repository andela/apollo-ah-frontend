import { UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from '../actions/actionTypes';

const profileReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, ...data, errorData: [] };
    case UPDATE_PROFILE_FAILURE:
      return { ...state, errorData: data };
    default:
      return state;
  }
};
export default profileReducer;
