import resetPasswordReducer from '../../reducers/resetPasswordReducer';
import * as types from '../../actions/actionTypes';

describe('Reset password reducer: ', () => {
  const state = {
    isLoading: false,
  };

  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(state);
  });

  it('should update the reducer state when successful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.PASSWORD_RESET_REQUEST_SUCCESS,
      isLoading: false,
    })).toEqual({ ...state, isLoading: false});
  });

  it('should update the reducer state when unsuccessful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.PASSWORD_RESET_REQUEST_FAILURE,
      isLoading: false
    })).toEqual({ ...state, isLoading: false});
  });
});
