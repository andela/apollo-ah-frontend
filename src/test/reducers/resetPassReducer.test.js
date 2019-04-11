import resetPasswordReducer from '../../reducers/resetPasswordReducer';
import { resetPassword } from '../../actions/resetPassword';
import { mockState } from '../setup';

const testState = mockState;

describe('Reset password reducer: ', () => {

  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(testState);
  });

  it('should update the reducer state when successful', () => {
    const data = { ...testState.responseMessage };
    const loading = { ...testState.isLoading};
    const action = {
      type: resetPassword.success,
      loading,
      data,
    };
    const result = resetPasswordReducer(testState, action);
    const expected = { ...testState, isLoading: action.loading, responseMessage: action.data};
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const data = { ...testState.responseMessage };
    const loading = { ...testState.isLoading };
    const action = {
      type: resetPassword.failure,
      loading,
      data,
    };
    const result = resetPasswordReducer(testState, action);
    const expected = { ...testState, isLoading: action.loading, responseMessage: action.data };
    expect(result).toEqual(expected);
  });
 });
