import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../components/HomePage.jsx';

configure({ adapter: new Adapter() });

describe('<Home>', () => {
  it('should have a p tag', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p').exists());
  });
});
