import moxios from 'moxios';
import * as actions from '../../actions/articleCategoryAction';
import mockCategories from '../../__mocks__/getCategoriesMock';
import { stubRequest, createMockStore } from '../setup';

const mockStore = createMockStore();

describe('articleCategoryAction test suite', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('creates GET_ARTICLES_CATEGORY_SUCCESS after successfuly fetching categories', () => {
    stubRequest(moxios, { ...mockCategories });

    const expectedActions = [
      { type: 'GET_ARTICLES_CATEGORY_SUCCESS' },
    ];

    const store = mockStore();

    return store.dispatch(actions.getArticlesCategory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('returns nothing if there is an error', () => {
    stubRequest(moxios, { ...mockCategories });

    const expectedActions = [
      {
        type: 'GET_ARTICLES_CATEGORY_SUCCESS',
        payload: undefined
      }
    ];

    const store = mockStore();

    return store.dispatch(actions.getArticlesCategory()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
