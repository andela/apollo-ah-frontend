import actionTypeCreator, { SYNC } from 'redux-action-types-creator';

export const ADD_DATA = 'ADD_DATA'; // dummy constant

const actionType = actionTypeCreator('APP');

export const PASSWORD_RESET_TYPES = actionType({
  PASSWORD: {
    LOADING: SYNC,
    SUCCESS: SYNC,
    FAILURE: SYNC,
  },
  MODAL: {
    RESET: SYNC,
  }
});

export default {};
