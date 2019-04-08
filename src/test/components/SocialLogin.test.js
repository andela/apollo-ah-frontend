/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SocialLogin } from '../../components/SocialLogin';
import FacebookButton from '../../views/common/FacebookButton';
import GoogleButton from '../../views/common/GoogleButton';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    handleLogin: jest.fn(),
    handleError: jest.fn(),
    isAuthenticated: false,
  };

  const enzymeWrapper = shallow(<SocialLogin {...props} />);
  return { props, enzymeWrapper };
}

describe('<SocialLogin />', () => {  
  it('renders without crashing given the required props', () => {
    const { enzymeWrapper } = setup();
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should render FacebookButton', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(FacebookButton)).toHaveLength(1);
  });
  it('should render GoogleButton', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(GoogleButton)).toHaveLength(1);
  });
});
