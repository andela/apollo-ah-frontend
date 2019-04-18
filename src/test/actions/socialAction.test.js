/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwt from 'jsonwebtoken';
import socialLogin from '../../actions/socialAction';
import { authenticationType } from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const { user } = initialState;

process.env.APP_KEY = 'secret';
const dummyUser = { email: 'johndoe@email.com', id: 1 };
const dummyToken = jwt.sign(dummyUser, 'secret');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe.only('async actions: socialLogin', () => {
  it('should dispatch request with success actions', () => {
    const expectedActions = [
      {
        type: authenticationType.success,
        payload: {
          ...dummyUser,
          token: dummyToken,
          isLoggedIn: true,
        }
      },
    ];

    const store = mockStore({ user });
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

    const store = mockStore({ user });
    store.dispatch(socialLogin('invalid token'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
