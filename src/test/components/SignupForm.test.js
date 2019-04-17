import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../components/SignupForm';

describe('<SignupForm Test Suite>', () => {
  describe('<SignupForm>', () => {
    const wrapper = shallow(<SignupForm />);
    it('It should render succesfully', () => {
      
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the right fields', () => {
      expect(wrapper.find('form').exists());
      expect(wrapper.find('#email').exists());
      expect(wrapper.find('#username').exists());
      expect(wrapper.find('#password').exists());
      expect(wrapper.find('input').exists());
      expect(wrapper.find('.btn').exists());
    });
  });
});