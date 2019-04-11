/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../views/Footer';

describe('<Footer Test Suite>', () => {
  describe('<Footer>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
