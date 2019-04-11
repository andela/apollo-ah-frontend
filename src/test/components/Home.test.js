/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage.jsx';

describe('<Home>', () => {
  it('should have a p tag', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p').exists());
  });
});
