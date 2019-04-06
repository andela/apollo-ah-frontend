import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// import jsonwebtoken from 'jsonwebtoken';
// import mockData from '../_mocks_/mockData';
import { mockResetPassword } from '../testUtilities/mockData';
// import mockLocalStorage from '../_mocks_/mockLocalStorage';
// import { signUpAction } from '../../actions/authActions';
import passwordResetRequest from '../../actions/resetPassword';
// import { SET_CURRENT_USER } from '../../actions/types';
import * as types from '../../actions/actionTypes';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const url = 'https://apollo-ah-backend-staging.herokuapp.com/api/v1/users/forgot_password';

// window.localStorage = mockLocalStorage;

describe('Reset password actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should throw an error when a valid email is supplied', async (done) => {
    const { authResponse, userData } = mockResetPassword;
    moxios.stubRequest(url, {
      status: 400,
      response: authResponse
    });
    const expectedActions = [{ type: types.PASSWORD_RESET_REQUEST_FAILURE }];
    const store = mockStore({});
    await store.dispatch(passwordResetRequest(userData))
      .then((res) => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  
  it('should send a link to user when a valid email is supplied', async (done) => {
    const { authResponse, userData } = mockResetPassword;
    moxios.stubRequest(url, {
      status: 200,
      response: authResponse
    });
    const expectedActions = [{ type: types.PASSWORD_RESET_REQUEST_SUCCESS }];
    const store = mockStore({});
    await store.dispatch(passwordResetRequest(userData))
      .then((res) => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
 });
 