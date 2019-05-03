import { createMockStore } from '../setup';
import request from '../../utils/request';
import { searchTypes, search } from '../../actions/searchAction';

const mockStore = createMockStore();

jest.mock('../../utils/request');

describe('Search Action creators', () => {
  it('should dispatch the correct actions on successful operation for non empty result', () => {
    request.mockResolvedValue({ data: { data: {} } });
    const expected = [
      {
        type: searchTypes.loading,
      },
      {
        type: searchTypes.success,
        data: {},
      }
    ];
    const store = mockStore();
    return store.dispatch(search()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch the correct actions on successful operation for empty result', () => {
    request.mockResolvedValue({ data: { data: [] } });
    const expected = [
      {
        type: searchTypes.loading,
      },
      {
        type: searchTypes.success,
        data: {},
      }
    ];
    const store = mockStore();
    return store.dispatch(search()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch the correct actions on failed operation', () => {
    request.mockRejectedValue({});
    const expected = [
      {
        type: searchTypes.loading,
      },
      {
        type: searchTypes.failure,
        data: 'Something went wrong. Please check your network connection.',
      }
    ];
    const store = mockStore();
    return store.dispatch(search()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
