import {
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
  PASSWORD_RESET_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

/**
 * reset password action creator
 *
 * @export
 * @param {object} state - initial state 
 * @param {object} action - to update state
 * @returns {object}
 */

export default function resetPasswordReducer(state = initialState, action = {}){
  switch (action.type) {
  case PASSWORD_RESET_REQUEST:
    return { ...state, isLoading: action.isLoading};
  case PASSWORD_RESET_REQUEST_SUCCESS:
    return { ...state, isLoading: action.isLoading};
  case PASSWORD_RESET_REQUEST_FAILURE:
    return { ...state, isLoading: action.isLoading};
  default:
    return state;
  }
}
