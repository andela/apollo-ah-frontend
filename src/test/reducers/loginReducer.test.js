import { loginType } from '../../actions/loginActions';
import initialState from '../../store/initialState';
import loginReducer from '../../reducers/loginReducers';

const initialUserState = initialState.user;

describe('Testimng login reducer', () => {
  it('Login reducer to return default state', () => {
    expect(loginReducer(undefined, {})).toEqual({ ...initialUserState });
  });
  it('should hanlde a loginType.success dispatch successfully', () => {
    const expectedResponse = { id: 4, token: 'djhjds', isLoggedIn: true };
    expect(loginReducer({ ...expectedResponse }, loginType.success)).not.toEqual({ ...initialUserState });
    expect(loginReducer({ id: 4, token: 'djhjds', isLoggedIn: true }, loginType.success))
      .toEqual({ ...expectedResponse });
  });
  it('should hanlde a LOG_IN_USER dispatch successfully and isLoggedin should be true', () => {
    const expectedResponse = { id: 4, token: 'djhjds', isLoggedIn: true };
    expect(loginReducer({ ...expectedResponse }, loginType.success)).not.toEqual({ ...initialUserState });
    expect(loginReducer({ id: 4, token: 'djhjds', isLoggedIn: true }, loginType.success))
      .toEqual({ ...expectedResponse });
  });
  it('should hanlde a LOG_IN_USER dispatch successfully and isLoggedin should be false', () => {
    const expectedResponse = { id: undefined, token: '', isLoggedIn: false };
    expect(loginReducer({ ...expectedResponse }, loginType.failure)).not.toEqual({ ...initialUserState });
    expect(loginReducer({ id: undefined, token: '', isLoggedIn: false }, loginType.failure))
      .toEqual({ ...expectedResponse });
  });
});