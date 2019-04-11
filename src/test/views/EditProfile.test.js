import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore, mockState } from '../setup';
import EditProfile from '../../views/EditProfile';

createMockStore();
const { profile } = mockState.user;

describe('<EditProfile>', () => {
  it('should render withour crashing', () => {
    const wrapper = shallow(
      <EditProfile
      isLoading={false}
      handleUpdateProfile={jest.fn()}
      profile={profile}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errorData', () => {
    mockState.user.errorData = [{}];
    const wrapper = shallow(
      <EditProfile
      isLoading
      handleUpdateProfile={jest.fn()}
      profile={profile}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
