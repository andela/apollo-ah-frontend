import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '../setup';
import Dashboard from '../../views/Dashboard';

createMockStore();

describe('<Dashboard>', () => {
  it('should render', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toBeDefined();
  });
});
