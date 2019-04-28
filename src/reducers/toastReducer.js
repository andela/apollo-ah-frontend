import { NEW_TOAST, CLEAR_TOAST } from '../actions/actionTypes';

export default (state = null, { type, payload }) => {
  switch (type) {
    case NEW_TOAST:
      return payload;
    case CLEAR_TOAST:
      return '';
    default:
      return state;
  }
};
