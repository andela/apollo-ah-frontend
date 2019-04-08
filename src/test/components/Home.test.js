import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';

describe('<Home>', () => {
  it('should have a p tag', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
