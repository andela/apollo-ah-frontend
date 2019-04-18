import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from '../../views/CommentBox';


describe('<CommentBox>', () => {
  it('should render withour crashing', () => {
    const wrapper = shallow(<CommentBox author="john" profileImage="image.jpg" body="text" time="2hrs ago" />);
    expect(wrapper).toMatchSnapshot();
  });
});
