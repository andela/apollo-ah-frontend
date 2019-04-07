import { UPDATING_PROFILE, UPDATING_PROFILE_IMAGE } from '../actions/actionTypes';

const loadingReducer = (state = {}, action) => {
  const { type, status } = action;
  switch (type) {
    case UPDATING_PROFILE:
      return { ...state, updatingProfile: status };
    case UPDATING_PROFILE_IMAGE:
      return { ...state, updatingProfileImage: status };
    default:
      return state;
  }
};
export default loadingReducer;
