/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import articlesReducer from '../../reducers/articleReducer';


export const mockState = {
  user: {
    token: '',
    isLoggedIn: false,
    loginStatus: false,
    message: '',
    isLoading: false,
    profile: {
      firstname: 'John',
      username: 'johnny',
      image: 'image.jpg',
      errorData: [],
    },
    resetPassword: {
      loading: false,
      message: '',
    },
  },
  userClaps: { claps: 0 },
  bookmarkedList: {
    bookmarked: [],
    isLoading: false,
    message: '',
  },
  location: {},
  article: {
    slug: 'article-slug',
    claps: 10,
    authorId: 1,
    newComments: {
      body: 'Hello world',
      id: 1,
      authorName: 'John',
      authorImage: 'image.jpg',
      date: 'July 4th 2018',
    },
    postingComment: false,
    commentMessage: 'Done',
    gettingComments: false,
    oldComments: [],
    hasMoreComments: false,
    commentPage: {
      current: 1,
      currentCount: 1,
      totalCount: 1,
    }
  },
  createArticle: {
    loading: false,
    message: false,
  },
  articlesReducer: {
    articles: [],
  },
  articlesCategoryReducer: [],
  follow: {
    followers: [],
    following: [],
    isLoading: false,
  },
  toast: '',
  dashboard: {
    articles: [],
    loading: false,
    message: '',
  },
  searchResult: {
    articles: [],
    page: {},
    loading: false,
    message: null,
  }
};
mockState.articlesReducer = articlesReducer;


export const createMockStore = () => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  return mockStore;
};

const setup = (component, initailState = mockState) => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  const connectedWrapper = mount(
    <Provider store={mockStore(initailState)}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

export default setup;
