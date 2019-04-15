import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from '../../views/SignupPage.jsx';
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
      console.log(wrapper.debug());
      expect(wrapper).toMatchSnapshot();
    });
  });
});