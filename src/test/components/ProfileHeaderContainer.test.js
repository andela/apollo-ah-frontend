import React from 'react';
import setup from '../setup';
import ProfileHeaderContainer from '../../components/ProfileHeaderContainer';

const container = <ProfileHeaderContainer activePage="PROFILE" />;
const mockFn = jest.fn();

window.cloudinary = {
  createUploadWidget: () => ({
    open: mockFn,
  }),
};

describe('<ProfileHeaderContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(container);
    expect(wrapper).toMatchSnapshot();
  });
  it('should open cloudinary widget', () => {
    const wrapper = setup(container);
    expect(wrapper.find('.change-image').simulate('click', mockFn));
    expect(window.cloudinary.createUploadWidget().open).toHaveBeenCalled();
  });
});
