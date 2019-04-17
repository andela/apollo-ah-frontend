import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from '../../actions';
import mockArticles from '../../__mocks__/getArticlesMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');
describe('articleAction test suite', () => {
  it('creates GET_ARTICLES_SUCCESS after successfuly fetching articles', () => {
    axios.get.mockResolvedValue({ data: { ...mockArticles } });

    const expectedActions = [
      {
        payload: 'started',
        type: 'LOADING',
      },
      { payload: undefined, type: 'GET_ARTICLES_SUCCESS' },
      {
        payload: 'stopped',
        type: 'STOP_LOADING',
      }
    ];

    const store = mockStore();

    return store.dispatch(actions.getArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('returns nothing if there is an error', () => {
    axios.get.mockRejectedValue({});

    const expectedActions = [{
      payload: 'started',
      type: 'LOADING',
    }, {
      payload: 'stopped',
      type: 'STOP_LOADING',
    }, {
      payload: {},
      type: 'SEVER_ERROR',
    }];

    const store = mockStore();

    return store.dispatch(actions.getArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
