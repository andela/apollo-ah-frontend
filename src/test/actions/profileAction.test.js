import '@babel/polyfill';
import moxios from 'moxios';
import * as actions from '../../actions/profileAction';
import { stubRequest, mockState, createMockStore } from '../setup';

const mockStore = createMockStore();

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
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch success message when updating user profile is done', () => {
    const response = {
      code: 201,
      data: payload,
      message: 'Profile updated successfully',
      status: true
    };

    stubRequest(moxios, response, 201);

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

    stubRequest(moxios, response, 400);

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
    stubRequest(moxios, undefined);

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
