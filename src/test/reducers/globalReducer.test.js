import globalReducer from '../../reducers/globalReducer';
import {
  TRIGGER_AUTHENTICATED,
  TRIGGER_ERROR
} from '../../actions/actionTypes';

describe('globalReducer()', () => {
  const initialState = {
    isAuthenticated: false,
    error: [],
  };
  
  it('should return the initial global state', () => {
    expect(globalReducer(initialState, {})).toEqual(initialState);
  });
  it('should return isAuthenticated: true and error: []', () => {
    const action = {
      type: TRIGGER_AUTHENTICATED,
      isAuthenticated: true,
      error: []
    };
    expect(globalReducer(initialState, action)).toEqual({
      isAuthenticated: true,
      error: []
    });
  });
  it('should return isAuthenticated: false and error: []', () => {
    const action = {
      type: TRIGGER_ERROR,
      isAuthenticated: false,
      error: { error: 'some error' }
    };
    expect(globalReducer(initialState, action)).toEqual({
      isAuthenticated: false,
      error: [{ error: 'some error' }]
    });
  });
});
