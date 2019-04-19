/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleBody from '../../views/ArticleBody';
import mockArticle from '../__mocks__/mockSingleArticleData';

configure({ adapter: new Adapter() });
// eslint-disable-next-line no-undef
const mockFn = jest.fn();
jest.useFakeTimers();


describe('<ArticleBody />', () => {
  it('should take a snapshot of the component', () => {
    const wrapper = shallow(
      <ArticleBody
        article={mockArticle}
        bookmarkArticle={mockFn}
        bookmarked={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should call bookmarkArticle & debounce when button is clicked', () => {
    // const dummyFn = mockFn;
    const wrapper = shallow(
      <ArticleBody
        article={mockArticle}
        bookmarkArticle={mockFn}
        bookmarked={false}
      />
    );
    wrapper.find('.bookmark-btn').first().simulate('click', { bookmarkArticle: f => f });
    jest.advanceTimersByTime(3000);
    expect(mockFn).toHaveBeenCalled();
    // expect(dummyFn).toHaveBeenCalled();
  }, 2000);
  it('should change bookmark icon color changes if article is bookmarked', () => {
    const wrapper = shallow(
      <ArticleBody
        article={mockArticle}
        bookmarkArticle={mockFn}
        bookmarked
      />
    );
    expect(wrapper.findWhere(span => span.hasClass('bookmarked')).exists()).toBe(true);
  });
});
