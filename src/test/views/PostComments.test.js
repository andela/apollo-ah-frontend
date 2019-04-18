import React from 'react';
import { shallow } from 'enzyme';
import PostComment from '../../views/PostComment';


describe('<PostComment>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PostComment postComment={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
