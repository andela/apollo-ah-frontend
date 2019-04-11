import { resetPassword } from '../actions/resetPassword';
import { resetModal } from '../actions/modal';

const initialState = {
  isLoading: false,
  responseMessage: false,
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
    case resetPassword.loading:
      return { ...state, isLoading: action.loading, responseMessage: action.data };
    case resetPassword.success:
      return { ...state, isLoading: action.loading, responseMessage: action.data };
    case resetPassword.failure:
      return { ...state, isLoading: action.loading, responseMessage: action.data };
    case resetModal.success:
      return { ...state, responseMessage: action.closeModal };
    default:
      return state;
  }
}
