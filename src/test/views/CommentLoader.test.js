import React from 'react';
import { shallow } from 'enzyme';
import CommentLoader from '../../views/CommentLoader';


describe('<CommentLoader>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CommentLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
