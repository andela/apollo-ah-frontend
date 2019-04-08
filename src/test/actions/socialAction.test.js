/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import socialLogin from '../../actions/socialAction';
import {
  TRIGGER_AUTHENTICATED, TRIGGER_ERROR
} from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * Wrapper for moxios stub
 * @param {object} response - The mocked response
 * @returns {void}
 */
const stubRequest = (response) => {
  moxios.wait(() => {
    moxios.requests.mostRecent()
      .respondWith({ response });
  });
};

describe('async actions: socialLogin', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const payload = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@yahoo.com',
    socialType: 'facebook',
    socialId: 676734878,
    avatarUrl: 'https://imageurl.com/image.png'
  };

  it('should dispatch request with success actions', () => {
    const expectedActions = [
      {
        type: TRIGGER_AUTHENTICATED,
        isAuthenticated: true,
      },
    ];
    const store = mockStore({
      global: {
        isAuthenticated: false,
        error: [],
      }
    });

    const mockResponse = {
      user: { token: 'user_token' }
    };
    stubRequest(mockResponse);
    return store.dispatch(socialLogin(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch request and error action', () => {
    const expectedActions = [
      {
        type: TRIGGER_ERROR,
        error: { socialType: ['invalid id'] }
      },
    ];

    const store = mockStore({
      global: {
        isAuthenticated: false,
        error: []
      }
    });
    
    const mockResponse = {
      errors: { socialType: ['invalid id'] }
    };
    stubRequest(mockResponse);
    return store.dispatch(socialLogin({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
