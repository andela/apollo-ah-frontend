import React from 'react';
import setup from '../setup';
import LikeComment from '../../components/LikeComment';

const mockFn = jest.fn();
const _props = {
  id: 2,
  slug: 'djsjhdskl-sdmnds',
  likeCount: 3,
  dislikeCount: 9,
  postDislikeComment: mockFn,
  postLikeComment: mockFn
};

describe('<LikeComment />', () => {
  it('Should render the component', () => {
    const wrapper = setup(
      <LikeComment
        {..._props}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render the component', () => {
    const wrapper = setup(<LikeComment {..._props} />);
    const btn = wrapper.find('.fa-thumbs-down');
    const btn2 = wrapper.find('.fa-thumbs-up');
    btn.simulate('click', { handleDislikes: f => f });
    btn2.simulate('click', { handleLikes: f => f });
    expect(btn).toBeDefined();
    expect(btn2).toBeDefined();
  });
  it('State should change on button click', () => {
    const wrapper = setup(<LikeComment {..._props} />);
    const LikeCommentWrapper = wrapper.find('LikeComment');
    LikeCommentWrapper.setState({ clickedLike: false });
    LikeCommentWrapper.setState({ clickedDislike: false });
    const btn = wrapper.find('.fa-thumbs-down');
    const btn2 = wrapper.find('.fa-thumbs-up');
    btn.simulate('click');
    btn2.simulate('click');
    expect(LikeCommentWrapper.state().clickedDislike).toBe(true);
    expect(LikeCommentWrapper.state().clickedLike).toBe(true);
    btn.simulate('click');
    btn2.simulate('click');
    expect(LikeCommentWrapper.state().clickedDislike).toBe(false);
    expect(LikeCommentWrapper.state().clickedLike).toBe(false);
  });
});
