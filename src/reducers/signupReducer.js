import typeGenerator from '../actions/actionTypeGenerator';

const initialState = {
  loading: false,
  errors: null,
  success: false,
  token: null
};

/**
 * @description - signup reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */
export default (state = initialState, action ) => {
  switch (action.type) {
    case typeGenerator('SIGNUP_LOADING'):
      return { loading: action.payload };
    case typeGenerator('SIGNUP_ERROR'):
      return { errors: action.payload.errors, loading: action.payload.loading };
    case typeGenerator('CLEAR_ERRORS'):
      return { errors: action.payload };
    case typeGenerator('ADD_ERROR'):
      return { errors: action.payload.errors };
    case typeGenerator('SIGNUP_SUCCESS'):
      return { success: action.payload.success, loading: action.payload.loading, token: action.payload.token };
    default:
      return state;
  }
};