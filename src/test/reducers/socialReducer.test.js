import socialReducer from '../../reducers/socialReducer';
import { authenticationType } from '../../actions/actionTypes';

describe('socialReducer()', () => {
  const initialState = {
    isAuthenticated: false,
    error: [],
  };
  
  it('should return the initial global state', () => {
    expect(socialReducer(initialState, {})).toEqual(initialState);
  });
  it('should return isAuthenticated: true and error: []', () => {
    const action = {
      type: authenticationType.success,
      payload: {
        isAuthenticated: true,
        error: []
      }
    };
    expect(socialReducer(initialState, action)).toEqual({
      isAuthenticated: true,
      error: []
    });
  });
  it('should return isAuthenticated: false and error: []', () => {
    const action = {
      type: authenticationType.failure,
      payload: {
        isAuthenticated: false,
        error: 'some error'
      }
    };
    expect(socialReducer(initialState, action)).toEqual({
      isAuthenticated: false,
      error: ['some error']
    });
  });
});
