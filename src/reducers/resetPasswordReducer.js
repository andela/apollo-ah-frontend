import {
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
  PASSWORD_RESET_REQUEST_LOADING,
  MODAL_RESET,
} from '../actions/actionTypes';

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
    case PASSWORD_RESET_REQUEST_LOADING:
      return { ...state, isLoading: action.isLoading, responseData: action.responseData };
    case PASSWORD_RESET_REQUEST_SUCCESS:
      return { ...state, isLoading: action.isLoading, responseData: action.responseData };
    case PASSWORD_RESET_REQUEST_FAILURE:
      return { ...state, isLoading: action.isLoading, responseData: action.responseData };
    case MODAL_RESET:
      return { ...state, responseData: action.responseData };
    default:
      return state;
  }
}
