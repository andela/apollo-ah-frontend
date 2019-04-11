import { profileTypes } from '../actions/profileAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
const profileReducer = (state = {}, action) => {
  const { type, data, status } = action;
  switch (type) {
    case profileTypes.success:
      return { ...state, profile: { ...data, loading: false, errorData: [] } };
    case profileTypes.failure:
      return { ...state, profile: { ...state.profile, loading: false, errorData: data, } };
    case profileTypes.loading:
      return { ...state, profile: { ...state.profile, loading: status } };
    default:
      return state;
  }
};
export default profileReducer;
