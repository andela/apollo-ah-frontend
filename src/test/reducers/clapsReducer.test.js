import clapsReducer from '../../reducers/clapsReducer';
import { userClapsType } from '../../actions/clapsAction';
import { mockState } from '../setup';

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(clapsReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle fetch user claps success state', () => {
    const initialState = { claps: 0 };
    const userClaps = { claps: 10 };
    const action = {
      type: userClapsType.success,
      payload: userClaps
    };
    const result = clapsReducer(initialState, action);
    const expected = { ...userClaps };
    expect(result).toEqual(expected);
  });
});
