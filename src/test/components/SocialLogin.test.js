/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SocialLogin } from '../../components/SocialLogin';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    handleLogin: jest.fn(),
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

  it('should render SocialButtons', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('SocialButton')).toHaveLength(2);
  });
});
