import '@babel/polyfill';
import * as actions from '../../actions/bookmarkActions';
import mockData from '../__mocks__/mockLoginData';
import mockArticle from '../__mocks__/mockSingleArticleData';
import { createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

const { bookmarkSuccess, data: user } = mockData;
jest.mock('../../utils/request');
const { bookmarkArticleType: types } = actions;

describe('Action creators', () => {
  it('should create an action to show bookmarking process is loading', () => {
    const status = true;
    const expected = {
      type: types.loading,
      status,
    };
    expect(actions.bookmarkLoading(types.loading, status)).toEqual(expected);
  });
  it('should create an action when bookmarking is successful', () => {
    const { data } = bookmarkSuccess;
    const expected = {
      type: types.success,
      data,
    };
    expect(actions.bookmarkArticleProcess(types.success, data)).toEqual(expected);
  });
  it('should create an action when bookmarking fails', () => {
    const data = 'The article does not exist';
    const expected = {
      type: types.failure,
      data: 'The article does not exist',
    };
    expect(actions.bookmarkArticleProcess(types.failure, data)).toEqual(expected);
  });
});

describe('Action creators', () => {
  it('should dispatch success message when bookmarking is done', () => {
    request.mockResolvedValue({ data: { ...bookmarkSuccess } });
    const expected = [
      {
        type: types.loading,
        status: true,
      },
      {
        type: types.success,
        data: bookmarkSuccess.data,
      }
    ];
    const store = mockStore({ bookmarkedList: {} });
    return store.dispatch(actions.bookmarkArticleGenerators({
      slug: mockArticle.slug, token: user.token
    })).then(() => {
      const actual = store.getActions();
      expect(actual).toEqual(expected);
    });
  });

  it('should dispatch success message when article is unbookmarked', () => {
    const response = {
      code: 200,
      data: [],
      message: 'successfully unbookmarked this articlet',
      status: true
    };
    request.mockResolvedValue({ data: { ...response } });
    const expected = [
      {
        type: types.loading,
        status: true,
      },
      {
        type: types.success,
        data: response.message,
      }
    ];
    const store = mockStore({ bookmarkedList: {} });
    return store.dispatch(actions.bookmarkArticleGenerators({
      slug: mockArticle.slug, token: user.token
    })).then(() => {
      const actual = store.getActions();
      expect(actual).toEqual(expected);
    });
  });

  it('should dispatch error message if article does not exist', () => {
    const response = {
      code: 404,
      data: [],
      message: 'This article does not exist',
      status: false
    };

    request.mockRejectedValue({ response: { data: { ...response } } });

    const expected = [
      {
        type: types.loading,
        status: true,
      },
      {
        type: types.failure,
        data: response.message
      }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(actions.bookmarkArticleGenerators({
      slug: mockArticle.slug + 2, token: user.token
    })).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
