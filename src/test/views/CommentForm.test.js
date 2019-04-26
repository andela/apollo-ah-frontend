import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from '../../views/CommentForm';

const mockFn = jest.fn();

describe('<CommentForm>', () => {
  it('should render without crashing when user is unauthenticated', () => {
    const wrapper = shallow(<CommentForm
      postComment={mockFn}
      handlePostComment={mockFn}
      postingComment={false}
      handleInputChange={mockFn}
      body="Hello world"
      isLoggedIn={false}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without crashing when user is authenticated', () => {
    const wrapper = shallow(<CommentForm
      postComment={mockFn}
      handlePostComment={mockFn}
      postingComment
      handleInputChange={mockFn}
      body="Hello world"
      isLoggedIn
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
