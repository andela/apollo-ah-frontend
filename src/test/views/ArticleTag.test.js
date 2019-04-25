import React from 'react';
import { shallow } from 'enzyme';
import ArticleTag from '../../views/ArticleTag';

const tag = {
  tagName: 'Technology',
};

describe('<ArticleTag>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ArticleTag tag={tag} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('badge')).toBe(true);
  });
});
