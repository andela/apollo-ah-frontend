import { PASSWORD_RESET_TYPES } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  responseData: false,
};

/**
 * reset password action creator
 *
 * @export
 * @param {object} state - initial state 
 * @param {object} action - to update state
 * @returns {object}
 */

export default function resetPasswordReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PASSWORD_RESET_TYPES.PASSWORD.LOADING:
      return { ...state, isLoading: action.isLoading, responseData: action.responseData };
    case PASSWORD_RESET_TYPES.PASSWORD.SUCCESS:
      return { ...state, isLoading: action.isLoading, responseData: action.responseData };
    case PASSWORD_RESET_TYPES.PASSWORD.FAILURE:
      return { ...state, isLoading: action.isLoading, responseData: action.responseData };
    case PASSWORD_RESET_TYPES.MODAL.RESET:
      return { ...state, responseData: action.responseData };
    default:
      return state;
  }
}
