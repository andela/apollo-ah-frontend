import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../views/Dashboard';

const dashboard = {
  articles: [],
  loading: false,
  message: '',
};


describe('<Dashboard>', () => {
  it('should render with empty articles', () => {
    const wrapper = shallow(<Dashboard summary={{}} dashboard={dashboard} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with articles', () => {
    dashboard.articles = [{
      id: 1,
    }];
    const wrapper = shallow(<Dashboard summary={{}} dashboard={dashboard} />);
    expect(wrapper).toMatchSnapshot();
  });
});
