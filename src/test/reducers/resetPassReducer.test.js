import resetPasswordReducer from '../../reducers/resetPasswordReducer';
import { resetPasswordType } from '../../actions/resetPassword';
import { mockState } from '../setup/index';

const {resetPassword: testState} = mockState.user;

describe('Reset password reducer: ', () => {

  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      "loading": false,
      "message": '',
    });
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: resetPasswordType.success,
      message: 'successful'
    };
    const result = resetPasswordReducer(testState, action);
    const expected = { ...testState, loading: false, message: 'successful'};
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: resetPasswordType.failure,
      message:'failed'
    };
    const result = resetPasswordReducer(testState, action);
    const expected = { ...testState, loading: false, message: 'failed' };
    expect(result).toEqual(expected);
  });
 });
