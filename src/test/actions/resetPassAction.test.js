import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/resetPasswordAction';
// import { resetPassword } from '../../actions/resetPasswordAction';
import mockAxios from '../../__mocks__/axios';
import generateToken from '../utils/generateToken';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const token = generateToken({ email: 'alexandra.collins+2@andela.com', id: 1 });

describe('Action creators', () => {
  it('should create an action to setLoading state', () => {
    const expected = {
      type: actions.resetPasswordType.loading,
    };
    expect({
      type: actions.resetPasswordType.loading,
    }).toEqual(expected);
  });
  it('should create an action when successful', () => {
    const expected = {
      type: actions.resetPasswordType.success,
      message: 'successful',
    };
    expect(actions.resetPasswordSuccess('successful')).toEqual(expected);
  });
  it('should create an action when failed', () => {
    const expected = {
      type: actions.resetPasswordType.failure,
      message: 'failed',
    };
    expect(actions.resetPasswordFailure('failed')).toEqual(expected);
  });
});

describe('resetPasswordAction test suite', () => {
  const data = {
    token,
    password: 'password1',
    confirmPassword: 'password1',
    email: 'alexandra.collins+2@andela.com'
  };
  it('creates RESET_PASSWORD_SUCCESS after successfuly updating a user password', () => {
    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({
      data: {
        token,
        password: 'password1',
        confirmPassword: 'password1',
        email: 'alexandra.collins+2@andela.com'
      }
    }));

    const expectedActions = [
      { type: actions.resetPasswordType.loading },
      { message: undefined, type: actions.resetPasswordType.success },
    ];

    const store = mockStore();

    return store.dispatch(actions
      .resetPassword(
        data.token,
        data.password,
        data.confirmPassword,
        data.email
      )).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
