import '@babel/polyfill';
import dashboardReducer from '../../reducers/dashboardReducer';
import { dashboardActionTypes } from '../../actions/dashboardAction';

describe('Dashboard Reducer', () => {
  it('should return the initial state', () => {
    expect(dashboardReducer({}, {})).toEqual({});
  });
  it('should return the initial state if it is not set', () => {
    expect(dashboardReducer(undefined, {})).toEqual({});
  });
  it('should handle successful operation', () => {
    const result = dashboardReducer({}, { type: dashboardActionTypes.success, data: [] });
    const expected = { articles: [], loading: false };
    expect(result).toEqual(expected);
  });
  it('should handle failed operation', () => {
    const result = dashboardReducer({}, { type: dashboardActionTypes.failure, data: '' });
    const expected = { articles: [], loading: false };
    expect(result).toEqual(expected);
  });
  it('should handle failed operation from unknown error', () => {
    const result = dashboardReducer({ articles: [{}] }, { type: dashboardActionTypes.failure, data: 'No network' });
    const expected = { articles: [{}], loading: false };
    expect(result).toEqual(expected);
  });
  it('should handle ongoing operation', () => {
    const result = dashboardReducer({}, { type: dashboardActionTypes.loading });
    const expected = { loading: true };
    expect(result).toEqual(expected);
  });
});
