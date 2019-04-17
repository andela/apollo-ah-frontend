import '@babel/polyfill';
import * as actions from '../../actions/profileAction';
import { mockState, createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');

const { profileTypes: types } = actions;
const { profile: payload } = mockState.user;

describe('Action creators', () => {
  it('should create an action to updating profile state', () => {
    const status = true;
    const expected = {
      type: types.loading,
      status,
    };
    expect(actions.updatingProfile(status)).toEqual(expected);
  });
  it('should create an action when profile is successfully updated', () => {
    const expected = {
      type: types.success,
      data: payload,
    };
    expect(actions.updateProfileSuccessful(payload)).toEqual(expected);
  });
  it('should create an action when profile could not be updateded', () => {
    const expected = {
      type: types.failure,
      data: payload,
    };
    expect(actions.updateProfileFailure(payload)).toEqual(expected);
  });
});


describe('Action creators', () => {
  it('should dispatch success message when updating user profile is done', () => {
    const response = {
      code: 201,
      data: payload,
      message: 'Profile updated successfully',
      status: true
    };

    request.mockResolvedValue({ data: { data: response.data } });

    const expected = [
      {
        type: types.loading,
        status: true,
      },
      {
        type: types.success,
        data: payload,
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch error message if server rejects the request', () => {
    const response = {
      code: 400,
      data: [{
        field: 'username',
        message: 'Username is required',
      }],
      message: 'Update was not successful',
      status: false
    };

    request.mockRejectedValue({ response: { data: { ...response } } });

    const expected = [
      {
        type: types.loading,
        status: true,
      },
      {
        type: types.failure,
        data: [response.message, response.data],
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile({ ...payload, username: '' })).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch error message if there was a network error', () => {
    request.mockRejectedValue({});

    const expected = [
      {
        type: types.loading,
        status: true,
      },
      {
        type: types.failure,
        data: ['Please check your network connection'],
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
