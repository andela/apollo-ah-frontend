import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';
import { createMockStore } from '../setup/index';

createMockStore();

describe('<Home>', () => {
  it('should have a p tag', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
