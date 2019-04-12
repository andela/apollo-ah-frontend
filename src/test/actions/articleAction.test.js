import moxios from 'moxios';
import * as actions from '../../actions/articleAction';
import mockArticles from '../../__mocks__/getArticlesMock';
import { stubRequest, createMockStore } from '../setup';

const mockStore = createMockStore();

describe('articleAction test suite', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('creates GET_ARTICLES_SUCCESS after successfuly fetching articles', () => {
    stubRequest(moxios, { ...mockArticles });

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

    const store = mockStore({});

    return store.dispatch(actions.getArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('returns nothing if there is an error', () => {
    stubRequest(moxios, { ...mockArticles });

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
});
