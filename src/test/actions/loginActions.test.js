import mockAxios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockData from '../__mocks__/mockLoginData';
import initialState from '../../store/initialState';
import userLogin, { loginType } from '../../actions/loginActions';
import decodeToken from '../../utils/decodeToken';

jest.mock('../../utils/decodeToken');
jest.mock('../../store');
const initialUserState = initialState.user;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const makeMockStore = (state = {}) => mockStore({ ...initialUserState, ...state });
const {
  success,
  failure,
  user,
  data,
  profile,
} = mockData;

describe('Testing login action generator', () => {
  it('Should dispatch the login action when login is successful', async (done) => {
    decodeToken.mockImplementation(() => profile);
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: { ...success } }));
    const expectedAction = [
      { type: loginType.loading, data: true },
      { type: loginType.success, data: { ...data, profile } },
    ];
    const store = makeMockStore();
    await store.dispatch(userLogin({ ...user }));
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });
  it('should return default state when login is unsuccessful', (done) => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: { ...failure } }));
    const expectedAction = { type: loginType.failure, payload: { ...initialUserState } };
    const store = makeMockStore();
    store.dispatch({ type: loginType.failure, payload: { ...initialUserState } });
    const actual = store.getActions();
    expect(actual).toEqual([expectedAction]);
    done();
  });
});
