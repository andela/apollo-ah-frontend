import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditProfile from '../../../../components/views/EditProfile';

configure({ adapter: new Adapter() });

const profile = {
  firstname: 'John',
  lastname: 'Doe',
  username: 'jonny',
  image: 'https://linktoimage.jpg',
  bio: 'I love writing',
  token: 'encoded',
  errorData: [],
};

const mockFn = jest.fn();

describe('<EditProfile>', () => {
  it('should render', () => {
    const wrapper = shallow(<EditProfile
      isLoading={false}
      handleUpdateProfile={mockFn}
      profile={profile}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errorData', () => {
    profile.errorData = [{}];
    const wrapper = shallow(<EditProfile
      isLoading
      handleUpdateProfile={mockFn}
      profile={profile}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
