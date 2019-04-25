/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../views/Navbar';

describe('<Navbar Test Suite>', () => {
  describe('<Navbar>', () => {
    it('It should render succesfully when user is not logged in', () => {
      const wrapper = shallow(<Navbar profile={{ username: 'demo', image: 'img.jpg' }} isLoggedIn={false} />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
    it('It should render succesfully when user is logged in', () => {
      const wrapper = shallow(<Navbar profile={{ username: 'demo', image: 'img.jpg' }} isLoggedIn />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
