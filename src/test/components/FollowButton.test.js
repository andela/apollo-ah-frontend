/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FollowButton } from '../../components/FollowButton';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    followId: null,
    username: '',
    followRequest: jest.fn(),
    isLoggedIn: false,
    authUsername: '',
    history: { push: jest.fn() },
    following: [],
    isLoading: false,
    toaster: '',
    clearToaster: jest.fn(),
    loadFollowers: jest.fn(),
  };

  const enzymeWrapper = shallow(<FollowButton {...props} />);
  return { props, enzymeWrapper };
}

describe('<FollowButton />', () => {
  it('renders without crashing given the required props', () => {
    const { enzymeWrapper } = setup();
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
