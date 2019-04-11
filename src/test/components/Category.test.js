/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Category from '../../views/Category';

const props = [{ 
  begin: 0,
  end: 6,
  articlesCategory: [{
    id: 1,
    category: 'Technology',
  }, {
    id: 2,
    category: 'Business',
  }, {
    id: 3,
    category: 'Sports',
  }],
}];
describe('<Category Test Suite>', () => {
  describe('<Category>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<Category {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
