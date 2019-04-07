import loadingReducer from '../../reducers/loadingReducer';
import * as types from '../../actions/actionTypes';


const initialState = {
  updatingProfile: false,
  updatingProfileImage: false,
};

describe('Loading Reducer', () => {
  it('should return the initial state', () => {
    expect(loadingReducer(initialState, {})).toEqual(initialState);
  });

  it('should set updatingProfile to true when updating profile', () => {
    const action = {
      type: types.UPDATING_PROFILE,
      status: true,
    };
    const result = loadingReducer(initialState, action);
    const expected = { ...initialState, updatingProfile: true };
    expect(result).toEqual(expected);
  });

  it('should set updatingProfile to false when updating is done', () => {
    const action = {
      type: types.UPDATING_PROFILE,
      status: false,
    };
    const result = loadingReducer(initialState, action);
    const expected = { ...initialState, updatingProfile: false };
    expect(result).toEqual(expected);
  });

  it('should set updatingProfileImage to true when updating image', () => {
    const action = {
      type: types.UPDATING_PROFILE_IMAGE,
      status: true,
    };
    const result = loadingReducer(initialState, action);
    const expected = { ...initialState, updatingProfileImage: true };
    expect(result).toEqual(expected);
  });

  it('should set updatingProfileImage to false when done updating image', () => {
    const action = {
      type: types.UPDATING_PROFILE_IMAGE,
      status: false,
    };
    const result = loadingReducer(initialState, action);
    const expected = { ...initialState, updatingProfileImage: false };
    expect(result).toEqual(expected);
  });
});
