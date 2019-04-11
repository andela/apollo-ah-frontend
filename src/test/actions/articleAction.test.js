import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import mockAxios from '../../__mocks__/axios';
import mockArticles from '../../__mocks__/getArticlesMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('articleAction test suite', () => {
  it('creates GET_ARTICLES_SUCCESS after successfuly fetching articles', () => {
    mockAxios.get.mockImplementationOnce(()=> Promise.resolve({
      data: {...mockArticles}
    }));

    const expectedActions = [
      {
        "payload": "started",
        "type": "LOADING",
      },
      { "payload": undefined, type: 'GET_ARTICLES_SUCCESS' },
      {
        "payload": "stopped",
        "type": "STOP_LOADING",
      }
    ];

    const store = mockStore();

    return store.dispatch(actions.getArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
  it('returns nothing if there is an error', () => {
    mockAxios.get.mockImplementationOnce(()=> Promise.reject({}));

    const expectedActions = [{
      "payload": "started",
      "type": "LOADING",
    }, {
      "payload": "stopped",
      "type": "STOP_LOADING",
    },{
      "payload": {},
      "type": "SEVER_ERROR",
      }];

    const store = mockStore();

    return store.dispatch(actions.getArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });
});
