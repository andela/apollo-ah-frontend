import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../views/Dashboard';

describe('<Dashboard>', () => {
  it('should render', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
