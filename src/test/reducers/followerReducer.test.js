import followerReducer from '../../reducers/followerReducer';
import {
  followType,
  getFollowersType,
  getFollowingType,
  unfollowType,
} from '../../actions/followAction';
import { mockState } from '../setup';

const { follow: initialState } = mockState;

describe('Follower Reducer', () => {
  const dummyData = { id: 1, email: 'john@email.com' };

  it('should return the initial state', () => {
    expect(followerReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle loading state', () => {
    const action = {
      type: followType.loading,
      payload: true
    };
    const result = followerReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: true
    };
    expect(result).toEqual(expected);
  });
  it('should handle successful state', () => {
    const action = {
      type: followType.success,
      payload: dummyData
    };
    const result = followerReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: false,
      following: [dummyData]
    };
    expect(result).toEqual(expected);
  });
  it('should handle failure state', () => {
    const action = {
      type: followType.failure,
      payload: {}
    };
    const result = followerReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: false,
    };
    expect(result).toEqual(expected);
  });
  it('should handle unfollow success state', () => {
    const action = {
      type: unfollowType.success,
      payload: {}
    };
    const result = followerReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: false,
      following: [],
    };
    expect(result).toEqual(expected);
  });
  it('should handle get follower success state', () => {
    const action = {
      type: getFollowersType.success,
      payload: [{}, {}, {}]
    };
    const result = followerReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: false,
      followers: [{}, {}, {}],
    };
    expect(result).toEqual(expected);
  });
  it('should handle get following success state', () => {
    const action = {
      type: getFollowingType.success,
      payload: [{}, {}]
    };
    const result = followerReducer(initialState, action);
    const expected = {
      ...initialState,
      isLoading: false,
      following: [{}, {}],
    };
    expect(result).toEqual(expected);
  });
});
