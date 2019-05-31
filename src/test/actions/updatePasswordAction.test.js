import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updatePassword } from '../../actions/updatePasswordAction';
import mockAxios from '../../__mocks__/axios';
import generateToken from '../utils/generateToken';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const token = generateToken({ email: 'alexandra.collins+2@andela.com', id: 1 });

describe('updatePasswordAction test suite', () => {
  const data = {
    token,
    password: 'password1',
    confirmPassword: 'password1',
    email: 'alexandra.collins+2@andela.com'
  };
  it('creates UPDATE_PASSWORD_SUCCESS after successfuly updating a user password', () => {
    mockAxios.patch.mockImplementationOnce(() => Promise.resolve({
      data: {
        token,
        password: 'password1',
        confirmPassword: 'password1',
        email: 'alexandra.collins+2@andela.com'
      }
    }));

    const expectedActions = [
      { type: 'UPDATE_PASSWORD_LOADING' },
      { message: undefined, type: 'UPDATE_PASSWORD_SUCCESS' },
    ];

    const store = mockStore();

    return store
      .dispatch(
        updatePassword(
          data.token,
          data.password,
          data.confirmPassword,
          data.email
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
