import {
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  resetSuccess: false,
  emailSuccess: false,
  confirmSuccess: false,
  updateSuccess: false,
  error: null,
};

export default function resetPasswordReducer(state = initialState, action){
  switch (action.type) {
  case PASSWORD_RESET_REQUEST_SUCCESS:
    return { ...state, emailSuccess: true };
  case PASSWORD_RESET_REQUEST_FAILURE:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}
