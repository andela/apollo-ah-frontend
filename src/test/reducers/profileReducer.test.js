import profileReducer from '../../reducers/profileReducer';
import defaultState from '../../store/initialState';
import * as types from '../../actions/actionTypes';


const { user: initialState } = defaultState;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(initialState, {})).toEqual(initialState);
  });
  it('should handle failed profile update', () => {
    const errorData = {
      field: 'lastname',
      message: 'Lastname is required'
    };
    const action = {
      type: types.UPDATE_PROFILE_FAILURE,
      data: [errorData]
    };
    const result = profileReducer(initialState, action);
    const expected = { ...initialState, errorData: [errorData] };
    expect(result).toEqual(expected);
  });
  it('should handle successful profile update', () => {
    const action = {
      type: types.UPDATE_PROFILE_SUCCESS,
      data: []
    };
    const result = profileReducer(initialState, action);
    const expected = { ...initialState, errorData: [] };
    expect(result).toEqual(expected);
  });
});
