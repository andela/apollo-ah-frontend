import React from 'react';
import { shallow } from 'enzyme';
import ArticleBox from '../../views/ArticleBox';


describe('<ArticleBox>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ArticleBox article={{
      slug: '',
      articleCategory: {},
      description: '',
      User: {
        Profile: {}
      },
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
