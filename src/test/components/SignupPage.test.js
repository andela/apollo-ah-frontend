import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from '../../views/SignupPage';

const props = [{
  message: {message: "Email is required"},
  close: () => {
    return;
  }
}];

describe('<SignupPage Test Suite>', () => {
  describe('<SignupPage>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<SignupPage />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});