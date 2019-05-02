import React from 'react';
import { shallow } from 'enzyme';
import BookmarkItem from '../../views/BookmarkItem';


describe('<BookmarkItem>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<BookmarkItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
