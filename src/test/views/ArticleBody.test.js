import React from 'react';
import ArticleBody from '../../views/ArticleBody';
import setup from '../setup';

const props = {
  bookmarkArticle: jest.fn(),
  bookmarked: false,
  article: {
    title: 'title',
    description: 'description',
    body: 'body',
    image: 'image.jpg',
    tagList: []
  }
};

describe('<ArticleBody>', () => {
  it('should render without crashing when there are no tags', () => {
    const wrapper = setup(<ArticleBody
        bookmarkArticle={props.bookmarkArticle}
        bookmarked={props.bookmarked}
        article={props.article}
        />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when there are tags', () => {
    props.article.tagList = [
      {
        tagName: 'tech',
      }
    ];
    const wrapper = setup(<ArticleBody
        bookmarkArticle={props.bookmarkArticle}
        bookmarked={props.bookmarked}
        article={props.article}
        />);
    expect(wrapper).toMatchSnapshot();
  });
});
