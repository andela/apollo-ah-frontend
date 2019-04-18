import '@babel/polyfill';
import profileReducer from '../../reducers/profileReducer';
import { profileTypes } from '../../actions/profileAction';
import { mockState } from '../setup';

const { user: testState } = mockState;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(mockState, {})).toEqual(mockState);
  });
  it('should return the initial state if it is not set', () => {
    expect(profileReducer(undefined, {})).toEqual({});
  });
  it('should handle failed profile update', () => {
    const errorData = {
      field: 'lastname',
      message: 'Lastname is required'
    };
    const action = {
      type: profileTypes.failure,
      data: [errorData]
    };
    const profile = { ...testState.profile, loading: false, errorData: [errorData] };
    const result = profileReducer(testState, action);
    const expected = { ...testState, profile: { ...profile } };
    expect(result).toEqual(expected);
  });
  it('should handle successful profile update', () => {
    const profile = { ...testState.profile };
    const action = {
      type: profileTypes.success,
      data: profile
    };
    const result = profileReducer(testState, action);
    const expected = { ...testState, profile: { ...profile, loading: false, errorData: [] } };
    expect(result).toEqual(expected);
  });
  it('should handle loading state', () => {
    const profile = { ...testState.profile };
    const action = {
      type: profileTypes.loading,
      status: true
    };
    const result = profileReducer(testState, action);
    const expected = { ...testState, profile: { ...profile, loading: true, errorData: [] } };
    expect(result).toEqual(expected);
  });
});
