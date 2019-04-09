import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../../../../components/views/Dashboard';

configure({ adapter: new Adapter() });

describe('<Dashboard>', () => {
  it('should render', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toBeDefined();
  });
});
