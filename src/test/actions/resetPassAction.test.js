import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { mockResetPassword } from '../testUtilities/mockData';
import passwordResetRequest from '../../actions/resetPassword';
import * as types from '../../actions/actionTypes';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const url = 'https://apollo-ah-backend-staging.herokuapp.com/api/v1/users/forgot_password';

describe('Reset password actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create PASSWORD_RESET_REQUEST_FAILURE when unsuccessful', async (done) => {
    const { userData } = mockResetPassword;
    moxios.stubRequest(url, {
      status: 400,
    });
    const expectedActions = [
      { 
        type: types.PASSWORD_RESET_REQUEST_FAILURE,
        isLoading: false,
      }
    ];
    const store = mockStore({});
    store.dispatch(passwordResetRequest(userData.email))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  
  it('should create PASSWORD_RESET_REQUEST_SUCCESS when successful', async (done) => {
    const { userData } = mockResetPassword;
    moxios.stubRequest(url, {
      status: 200,
    });
    const expectedActions = [
      { 
        type: types.PASSWORD_RESET_REQUEST_SUCCESS,
        isLoading: false
      }
    ];
    const store = mockStore({});
    store.dispatch(passwordResetRequest(userData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
 });
 