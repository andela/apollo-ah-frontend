import React from 'react';
import { shallow } from 'enzyme';
import ErrorAlert from '../../views/ErrorAlert.jsx';
const props = [{
  message: {message: "Email is required"},
  close: () => {
    return;
  }
}];

describe('<ErrorAlert Test Suite>', () => {
  describe('<ErrorAlert>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<ErrorAlert {...props} />);
      expect(wrapper).toBeDefined();
      console.log(wrapper.debug());
      expect(wrapper).toMatchSnapshot();
    });
  });
});