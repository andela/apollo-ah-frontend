import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from '../../views/SignupPage';

describe('<SignupPage Test Suite>', () => {
  const wrapper = shallow(<SignupPage />);
  describe('<SignupPage>', () => {
    it('should render succesfully', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
    it('Should have a form', () => {
      expect(wrapper.find('form').exists());
    });
    it('Should have the right fields', () => {
      expect(wrapper.find('#email').exists());
      expect(wrapper.find('#username').exists());
      expect(wrapper.find('#password').exists());
      expect(wrapper.find('input').exists());
    });
  });
});
