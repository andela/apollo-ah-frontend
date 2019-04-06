import resetPasswordReducer from '../../reducers/resetPasswordReducer';
import * as types from '../../actions/actionTypes';

describe('Reset password reducer: ', () => {
  const state = {
    resetSuccess: false,
    emailSuccess: false,
    confirmSuccess: false,
    updateSuccess: false,
  };

  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(state);
  });

  it('should update the reducer state when successful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.PASSWORD_RESET_REQUEST_SUCCESS
    })).toEqual({ ...state, emailSuccess: true });
  });

  it('should update the reducer state when unsuccessful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.PASSWORD_RESET_REQUEST_FAILURE,
      payload: 'error'
    })).toEqual(state);
  });
});