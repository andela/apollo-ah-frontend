import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import initialState from '../../store/initialState';
import ConnectedArticle from '../../components/Article';
import MockArticle from '../__mocks__/mockSingleArticleData';
import articlesReducer from '../../reducers/articleReducer';
import mockData2 from '../__mocks__/mockLoginData';

const { bookmarkSuccess } = mockData2;
const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });
// eslint-disable-next-line no-undef
const mockFn = jest.fn();
jest.useFakeTimers();
const params = { slug: MockArticle.slug };
const mockState = initialState;
mockState.article = MockArticle;
mockState.article.User = MockArticle.author;
mockState.articles = [MockArticle];
mockState.articlesReducer = articlesReducer;
mockState.bookmarkedList.bookmarked = [bookmarkSuccess.data];
delete mockState.article.author;
global.scrollTo = jest.fn();
const history = { push: jest.fn() };

describe('<SingleArticle />', () => {
  const connectedWrapper = mount(
    <Provider store={mockStore(mockState)}>
      <BrowserRouter>
        <ConnectedArticle
          match={{ params }}
          getArticle={mockFn}
          history={history}
        />
      </BrowserRouter>
    </Provider>
  );

  it('Should render and display article', () => {
    const ArticleComponent = connectedWrapper.find('Article');
    expect(connectedWrapper).toMatchSnapshot();
    connectedWrapper.find('#bookmark-btn').simulate('click');
    jest.advanceTimersByTime(3000);
    connectedWrapper.update();
    expect(ArticleComponent.state('bookmarked')).toBe(true);
  });
});
