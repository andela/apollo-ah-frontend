import resetPasswordReducer from '../../reducers/resetPasswordReducer';
import { PASSWORD_RESET_TYPES } from '../../actions/actionTypes';

describe('Reset password reducer: ', () => {
  const state = {
    isLoading: false,
    responseData: false
  };

  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(state);
  });

  it('should update the reducer state when successful', () => {
    expect(resetPasswordReducer(undefined, {
      type: PASSWORD_RESET_TYPES.PASSWORD.SUCCESS,
      isLoading: false,
      responseData: 'data',
    })).toEqual({ ...state, isLoading: false, responseData: 'data'});
  });

  it('should update the reducer state when unsuccessful', () => {
    expect(resetPasswordReducer(undefined, {
      type: PASSWORD_RESET_TYPES.PASSWORD.FAILURE,
      isLoading: false,
      responseData: 'data',
    })).toEqual({ ...state, isLoading: false, responseData: 'data'});
  });
});
