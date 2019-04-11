import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../views/Navbar.jsx';

describe('<Navbar Test Suite>', () => {
  describe('<Navbar>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<Navbar />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
