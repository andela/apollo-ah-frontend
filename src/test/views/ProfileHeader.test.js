import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore, mockState } from '../setup';
import ProfileHeader from '../../views/common/ProfileHeader';

createMockStore();
const { profile } = mockState.user;

const mockFn = jest.fn();

describe('<ProfileHeader>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <ProfileHeader
      activePage="DASHBOARD"
      isLoading
      handleImageUpload={mockFn}
      profile={profile}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.change-image').exists()).toBe(false);
  });
  it('should render upload image button on edit profile page', () => {
    const wrapper = shallow(
      <ProfileHeader
      activePage="PROFILE"
      isLoading={false}
      handleImageUpload={mockFn}
      profile={profile}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.change-image').exists()).toBe(true);
  });
  it('should highlight settings tab if settings page is selected', () => {
    const wrapper = shallow(
      <ProfileHeader
      activePage="SETTINGS"
      isLoading
      handleImageUpload={mockFn}
      profile={profile}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.change-image').exists()).toBe(false);
  });
  it('should handle upload image click event', () => {
    const wrapper = shallow(
      <ProfileHeader
      activePage="PROFILE"
      isLoading
      handleImageUpload={mockFn}
      profile={profile}
      />
    );
    expect(wrapper.find('.change-image').exists()).toBe(true);
  });
});
