import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import mockAxios from '../../__mocks__/axios';
import mockCategories from '../../__mocks__/getCategoriesMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('articleCategoryAction test suite', () => {
  it('creates GET_ARTICLES_CATEGORY_SUCCESS after successfuly fetching categories', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: { ...mockCategories }
    }));

    const expectedActions = [
      { type: 'GET_ARTICLES_CATEGORY_SUCCESS' },
    ];

    const store = mockStore();

    return store.dispatch(actions.getArticlesCategory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('returns nothing if there is an error', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject({}));

    const expectedActions = [{
      payload: {},
      type: 'SEVER_ERROR',
    }];

    const store = mockStore();

    return store.dispatch(actions.getArticlesCategory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
