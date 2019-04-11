/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage';

describe('<Home>', () => {
  it('should have a p tag', () => {
    const props = {
      articles: [],
      articlesCategory: '',
      loadingArticles: jest.fn(),
      loadingCategory: jest.fn(),
    };
    const wrapper = shallow(<HomePage {...props} />);
    expect(wrapper.find('p').exists());
  });
});
