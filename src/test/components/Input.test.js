import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../views/Input';

describe('<Input  Test Suite>', () => {
  describe('<Input>', () => {
    function onChange() {
      return true;
    }
    it('It should render Input field well', () => {
      const wrapper = shallow(<Input name="email" onChange={onChange} display="Email" type="text" />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
