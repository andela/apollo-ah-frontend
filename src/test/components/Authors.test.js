/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Authors from '../../views/Category';

const props = [{ 
  begin: 0,
  end: 6,
  authors: [{
    authorsProfile: {
      image: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      firstname: 'Andra',
      lastname: 'Collins',
      bio: 'I love writing inspirational articles',
    },
  }],
}];

describe('<Authors Test Suite>', () => {
  describe('<Authors>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<Authors {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
