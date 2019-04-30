import React from 'react';
import { shallow } from 'enzyme';
import Category from '../../views/Category';

describe('<Category Test Suite>', () => {
  describe('<Category>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<Category category={{ category: 'tech', id: '1' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
