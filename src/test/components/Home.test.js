import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../components/HomePage';

configure({ adapter: new Adapter() });

describe('<Home>', () => {
  it('should have a p tag', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<HomePage />);
    console.log(wrapper.debug());
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
