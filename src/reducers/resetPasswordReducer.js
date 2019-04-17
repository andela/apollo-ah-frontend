import { resetPasswordType } from '../actions/resetPassword';
import { resetModal } from '../actions/modal';

const initialState = {
  loading: false,
  message: '',
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
  const { type, message } = action;
  switch (type) {
    case resetPasswordType.loading:
      return { ...state, resetPassword: { loading: true, message: '' } };
    case resetPasswordType.success:
    case resetPasswordType.failure:
      return { ...state, resetPassword: { loading: false, message } };
    case resetModal.success:
      return { ...state, resetPassword: { loading: false, message: false } };
    default:
      return state;
  }
}
