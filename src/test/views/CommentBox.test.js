import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../../views/CommentBox';


describe('<CommentBox>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CommentBox
      authorName="john"
      authorImage="image.jpg"
       body="text"
       date="2hrs ago"
       fullDate="July 4th 2019, 4:45pm"
        />);
    expect(wrapper).toMatchSnapshot();
  });
});
