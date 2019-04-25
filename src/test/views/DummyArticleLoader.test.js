import React from 'react';
import { shallow } from 'enzyme';
import DummyArticleLoader from '../../views/DummyArticleLoader';


describe('<NotFound />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<DummyArticleLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
