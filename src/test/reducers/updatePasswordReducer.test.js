import updatePasswordReducer from '../../reducers/updatePasswordReducer';
import { updatePasswordType } from '../../actions/updatePasswordAction';
import { mockState } from '../setup/index';

const { updatePassword } = mockState;

describe('Update password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(updatePasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loading: false,
      message: '',
    });
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: updatePasswordType.success,
      message: 'Successfully updated password'
    };
    const result = updatePasswordReducer(updatePassword, action);
    const expected = { ...updatePassword, loading: false, message: 'Successfully updated password' };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: updatePasswordType.loading,
      loading: true,
      message: ''
    };
    const result = updatePasswordReducer(updatePassword, action);
    const expected = { ...updatePassword, loading: true, message: '' };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: updatePasswordType.failure,
      loading: false,
      message: ''
    };
    const result = updatePasswordReducer(updatePassword, action);
    const expected = { ...updatePassword, loading: false, message: '' };
    expect(result).toEqual(expected);
  });
});
