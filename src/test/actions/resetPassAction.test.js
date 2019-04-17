import expect from 'expect';
import * as actions from '../../actions/resetPassword';


describe('Action creators', () => {
  it('should create an action to setLoading state', () => {
    const expected = {
      type: actions.resetPasswordType.loading,
    };
    expect({
      type: actions.resetPasswordType.loading,
    }).toEqual(expected);
  });
  it('should create an action when successful', () => {
    const expected = {
      type: actions.resetPasswordType.success,
      message: 'successful',
    };
    expect(actions.resetPasswordSuccess('successful')).toEqual(expected);
  });
  it('should create an action when failed', () => {
    const expected = {
      type: actions.resetPasswordType.failure,
      message: 'failed',
    };
    expect(actions.resetPasswordFailure('failed')).toEqual(expected);
  });
});
