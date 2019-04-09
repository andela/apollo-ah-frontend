import '@babel/polyfill';
import moxios from 'moxios';
import mockStore from '../utils/mockStore';
import * as actions from '../../actions/profileAction';
import * as types from '../../actions/actionTypes';

const payload = {
  firstname: 'John',
  lastname: 'Doe',
  username: 'johnny',
  bio: 'I love writing',
  image: 'https://linktoimage.jpg'
};

const stubRequest = (response, status = 200) => {
  moxios.wait(() => {
    moxios.requests.mostRecent()
      .respondWith({
        status,
        response,
      });
  });
};

describe('Action creators', () => {
  it('should create an action to setLoading state', () => {
    const status = true;
    const expected = {
      type: types.UPDATING_PROFILE,
      status,
    };
    expect(actions.setIsLoading(types.UPDATING_PROFILE, status)).toEqual(expected);
  });
  it('should create an action to signal update status', () => {
    const data = [];
    const expected = {
      type: types.UPDATE_PROFILE_SUCCESS,
      data,
    };
    expect(actions.signalUpdateStatus(types.UPDATE_PROFILE_SUCCESS, data)).toEqual(expected);
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

    stubRequest(response);

    const expected = [
      {
        type: types.UPDATING_PROFILE,
        status: true,
      },
      {
        type: types.UPDATING_PROFILE,
        status: false,
      },
      {
        type: types.UPDATE_PROFILE_SUCCESS,
        data: payload,
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(types.UPDATING_PROFILE, payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch success message when updating user profile image is done', () => {
    const response = {
      code: 201,
      data: payload,
      message: 'Profile updated successfully',
      status: true
    };
    stubRequest(response);

    const expected = [
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: true,
      },
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: false,
      },
      {
        type: types.UPDATE_PROFILE_SUCCESS,
        data: payload,
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(types.UPDATING_PROFILE_IMAGE, payload))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });

  it('should dispatch error message if server returns error when updating profile', () => {
    const response = {
      code: 400,
      data: [{
        field: 'username',
        message: 'Username is required',
      }],
      message: 'Update was not successful',
      status: false
    };

    stubRequest(response, 400);

    const body = { ...payload, username: '' };

    const expected = [
      {
        type: types.UPDATING_PROFILE,
        status: true,
      },
      {
        type: types.UPDATING_PROFILE,
        status: false,
      },
      {
        type: types.UPDATE_PROFILE_FAILURE,
        data: response.data,
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(types.UPDATING_PROFILE, body)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch error message if server returns error when updating profile image', () => {
    const response = {
      code: 400,
      data: [{
        field: 'username',
        message: 'Username is required',
      }],
      message: 'Update was not successful',
      status: false
    };

    stubRequest(response, 400);

    const body = { ...payload, username: '' };

    const expected = [
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: true,
      },
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: false,
      },
      {
        type: types.UPDATE_PROFILE_FAILURE,
        data: response.data,
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(types.UPDATING_PROFILE_IMAGE, body))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });

  it('should accept FormData object as parameter', () => {
    const response = {
      code: 201,
      data: payload,
      message: 'Profile updated successfully',
      status: true
    };
    stubRequest(response);

    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('firstname', payload.firstname);
    formData.append('lastname', payload.lastname);
    formData.append('image', payload.image);
    formData.append('bio', payload.bio);

    const expected = [
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: true,
      },
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: false,
      },
      {
        type: types.UPDATE_PROFILE_SUCCESS,
        data: payload,
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(types.UPDATING_PROFILE_IMAGE, formData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });

  it('should dispatch error message if there is no network connection or there was a server error', () => {
    stubRequest(undefined);

    const expected = [
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: true,
      },
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: false,
      },
      {
        type: types.UPDATING_PROFILE_IMAGE,
        status: false,
      },
      {
        type: types.UPDATE_PROFILE_FAILURE,
        data: [{}],
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.updateUserProfile(types.UPDATING_PROFILE_IMAGE, payload))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });
});
