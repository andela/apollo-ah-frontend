import React from 'react';
import { shallow } from 'enzyme';
import SocialShare from '../../components/SocialShare';

describe('<Navbar Test Suite>', () => {
  describe('<Navbar>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<SocialShare />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
