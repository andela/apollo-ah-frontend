import '@babel/polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockData from '../__mocks__/mockSignupData';
import initialState from '../../store/initialState';
import request from '../../utils/request';
import {
  signupType,
  signUpUser,
  addError,
  clearErrors
} from '../../actions/signupActions';

jest.mock('../../utils/request');
const initialUserState = initialState.user;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const makeMockStore = (state = {}) => mockStore({ ...initialUserState, ...state });
const {
  success,
  user,
  data
} = mockData;

describe('Testing signup action ', () => {
  it('Should dispatch the success action type when signup is successfull', async (done) => {
    request.mockResolvedValue({ data: { data: { ...success } } });
    const expectedAction = [
      { type: signupType.loading, data: true },
      { type: signupType.success, data: { token: data.token, success: true, loading: false } },
    ];
    const store = makeMockStore();
    await store.dispatch(signUpUser({ ...user }));
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });
  it('should populate the store with errors for the application', async (done) => {
    const expectedAction = [
      {
        type: signupType.add_error,
        data: { errors: [{ message: 'Email is required', field: 'email' }] }
      }
    ];

    const store = makeMockStore();
    await store.dispatch(addError([{ message: 'Email is required', field: 'email' }]));
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });

  it('should reset the errors in the store', async (done) => {
    const expectedAction = [
      { type: signupType.clear_errors, data: null }
    ];
    const store = makeMockStore();
    await store.dispatch(clearErrors());
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });
});
