import toastReducer from '../../reducers/toastReducer';
import {
  NEW_TOAST,
  CLEAR_TOAST,
} from '../../actions/actionTypes';

describe('Toast Reducer', () => {
  it('should return the initial state', () => {
    expect(toastReducer('', {})).toEqual('');
  });
  it('should handle new toast state', () => {
    const message = 'toast message';
    const action = { type: NEW_TOAST, payload: message };
    const result = toastReducer('', action);
    expect(result).toEqual(message);
  });
  it('should handle clear toast state', () => {
    const action = { type: CLEAR_TOAST };
    const result = toastReducer('toast message', action);
    expect(result).toEqual('');
  });
});
