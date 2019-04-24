import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore, mockState } from '../setup';
import EditProfile from '../../views/EditProfile';

createMockStore();
const { profile } = mockState.user;

describe('<EditProfile>', () => {
  it('should render withour crashing', () => {
    const wrapper = shallow(<EditProfile
      isLoading={false}
      handleUpdateProfile={jest.fn()}
      profile={profile}
      token="encoded"
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errorData', () => {
    const wrapper = shallow(<EditProfile
      isLoading
      errorData={[{}]}
      handleUpdateProfile={jest.fn()}
      profile={profile}
      token="encoded"
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with empty errorData', () => {
    const wrapper = shallow(<EditProfile
      isLoading
      errorData={[]}
      handleUpdateProfile={jest.fn()}
      profile={profile}
      token="encoded"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
