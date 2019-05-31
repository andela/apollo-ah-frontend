import { updatePasswordType } from '../actions/updatePasswordAction';

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

export default (state = initialState, action) => {
  const { type, message } = action;
  switch (type) {
    case updatePasswordType.loading:
      return {
        ...state,
        loading: true,
        message: ''
      };
    case updatePasswordType.success:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case updatePasswordType.failure:
      return {
        ...state,
        loading: false,
        message,
      };
    default:
      return state;
  }
};
