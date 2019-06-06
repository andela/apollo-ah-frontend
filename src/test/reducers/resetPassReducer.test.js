import resetPasswordReducer from '../../reducers/resetPasswordReducer';
import { resetPasswordType } from '../../actions/resetPasswordAction';
import { resetModal } from '../../actions/modal';
import { mockState } from '../setup/index';

const { user } = mockState;

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loading: false,
      message: '',
    });
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: resetPasswordType.success,
      message: 'successful'
    };
    const result = resetPasswordReducer(user, action);
    const expected = { ...user, resetPassword: { loading: false, message: 'successful' } };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: resetPasswordType.loading,
      loading: true,
    };
    const result = resetPasswordReducer(user, action);
    const expected = { ...user, resetPassword: { loading: true, message: '' } };
    expect(result).toEqual(expected);
  });


  it('should update the reducer state when resetting modal', () => {
    const action = {
      type: resetModal.success,
      loading: false,
      message: 'reset modal',
    };
    const result = resetPasswordReducer(user, action);
    const expected = { ...user, resetPassword: { loading: false, message: 'reset modal' } };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: resetPasswordType.failure,
      message: 'failed'
    };
    const result = resetPasswordReducer(user, action);
    const expected = { ...user, resetPassword: { loading: false, message: 'failed' } };
    expect(result).toEqual(expected);
  });
});
