import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../../views/Articles';

const articleProps = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  title: 'New article title',
  articleCategory: {
    category: 'Technology',
  },
  description: 'This is the article description',
  User: {id: 8, Profile:{firstname: 'Andra', lastname: 'Collins', username: '@Andra'}},
}];

describe('<Articles Test Suite>', () => {
  describe('<Articles>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<Articles articles={articleProps} />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
