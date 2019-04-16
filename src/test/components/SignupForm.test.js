import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../components/SignupForm';


describe('<SignupForm Test Suite>', () => {
  describe('<SignupForm>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<SignupForm />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});