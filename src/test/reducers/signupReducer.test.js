import { signupType } from '../../actions/signupActions';
import initialState from '../../store/initialState';
import signupReducer from '../../reducers/signupReducer';

const initialUserState = initialState;

describe('Testimng Signup reducer', () => {
  it('should return default state', () => {
    expect(signupReducer(undefined, {})).toEqual(initialUserState);
  });
  it('should handle signup success type', () => {
    const expectedResponse = { data: { success: true, token: 'djhjds', loading: false } };
    expect(signupReducer(expectedResponse, signupType.success))
      .not.toEqual({ ...initialUserState });
    expect(signupReducer(expectedResponse, signupType.success))
      .toEqual(expectedResponse);
  });
  it('should handle signup error', () => {
    const expectedResponse = { data: { errors: {}, loading: false } };
    expect(signupReducer(expectedResponse, signupType.failure))
      .not.toEqual({ ...initialUserState });
    expect(signupReducer(expectedResponse, signupType.failure))
      .toEqual(expectedResponse);
  });
  it('should hanlde add_error case', () => {
    const expectedResponse = { data: { errors: {} } };
    expect(signupReducer(expectedResponse, signupType.failure))
      .not.toEqual({ ...initialUserState });
    expect(signupReducer(expectedResponse, signupType.failure))
      .toEqual(expectedResponse);
  });
  it('should hanlde clear_error case', () => {
    const expectedResponse = { data: { errors: null, loading: false } };
    expect(signupReducer(expectedResponse, signupType.failure))
      .not.toEqual({ ...initialUserState });
    expect(signupReducer(expectedResponse, signupType.failure))
      .toEqual(expectedResponse);
  });
});
