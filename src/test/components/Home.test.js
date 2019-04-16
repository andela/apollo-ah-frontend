import React from 'react';
import { configure, shallow } from 'enzyme';
import HomePage from '../../components/HomePage';

describe('<Home>', () => {
  it('should have a p tag', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p').exists());
  });
});
