/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import socialLogin from '../../actions/socialAction';
import { authenticationType } from '../../actions/actionTypes';

process.env.APP_KEY = 'secret';
const dummyToken = jwt.sign({
  email: 'johndoe@email.com',
  id: 1,
}, 'secret');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions: socialLogin', () => {
  it('should dispatch request with success actions', () => {
    const expectedActions = [
      {
        type: authenticationType.success,
        payload: { isAuthenticated: true }
      },
    ];
    const store = mockStore({
      social: {
        isAuthenticated: false,
        error: [],
      }
    });

    store.dispatch(socialLogin(dummyToken));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should dispatch request and error action', () => {
    const expectedActions = [
      {
        type: authenticationType.failure,
        payload: {
          error: 'jwt malformed'
        }
      },
    ];

    const store = mockStore({
      social: {
        isAuthenticated: false,
        error: []
      }
    });

    store.dispatch(socialLogin('invalid token'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
