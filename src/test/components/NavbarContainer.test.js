import React from 'react';
import { shallow } from 'enzyme';
import { NavbarContainer } from '../../components/NavbarContainer';

describe('<Navbar Test Suite>', () => {
  const props = {
    profile: {
      username: 'demo',
      image: 'img.jpg',
    },
    isLoggedIn: false,
    logoutUser: jest.fn(),
    revealSearchBar: jest.fn(),
  };

  const event = {
    preventDefault: jest.fn(),
  };
  it('It should render succesfully when user is not logged in', () => {
    const wrapper = shallow(<NavbarContainer {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should logout a user', () => {
    const wrapper = shallow(<NavbarContainer {...props} />);
    wrapper.instance().onLogoutClick();
    expect(wrapper.instance().props.logoutUser).toHaveBeenCalled();
  });
  it('should reveal search bar', () => {
    const wrapper = shallow(<NavbarContainer {...props} />);
    expect(wrapper.instance().state.showSearch).toEqual(false);
    wrapper.instance().revealSearchBar(event);
    expect(wrapper.instance().state.showSearch).toEqual(true);
  });
});
