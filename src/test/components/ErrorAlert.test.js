import React from 'react';
import { shallow } from 'enzyme';
import ErrorAlert from '../../views/ErrorAlert';

const props = {
  message: { message: 'Email is required', field: 'email' },
  close: () => true,
};

describe('<ErrorAlert Test Suite>', () => {
  describe('<ErrorAlert>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<ErrorAlert {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
