import '@babel/polyfill';
import { dashboardActionTypes, getDashboardArticles } from '../../actions/dashboardAction';
import { createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');

describe('Dashboard Action creators', () => {
  it('should dispatch the correct actions on successful operation', () => {
    request.mockResolvedValue({ data: { data: { articles: [] } } });
    const expected = [
      {
        type: dashboardActionTypes.loading,
      },
      {
        type: dashboardActionTypes.success,
        data: [],
      }
    ];
    const store = mockStore();
    return store.dispatch(getDashboardArticles()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch the correct actions on failed operation', () => {
    request.mockRejectedValue({ response: {} });
    const expected = [
      {
        type: dashboardActionTypes.loading,
      },
      {
        type: dashboardActionTypes.failure,
        data: '',
      }
    ];
    const store = mockStore();
    return store.dispatch(getDashboardArticles()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch the correct actions when there is an unknown error', () => {
    request.mockRejectedValue({});
    const expected = [
      {
        type: dashboardActionTypes.loading,
      },
      {
        type: dashboardActionTypes.failure,
        data: 'Please check your network connection',
      }
    ];
    const store = mockStore();
    return store.dispatch(getDashboardArticles()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
