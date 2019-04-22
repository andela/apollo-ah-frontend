/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ClapButton } from '../../components/ClapButton';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    article: {},
    clapArticle: jest.fn(),
    loadUserClaps: jest.fn(),
    claps: 0,
  };

  const enzymeWrapper = shallow(<ClapButton {...props} />);
  return { props, enzymeWrapper };
}

describe('<ClapButton />', () => {
  it('renders without crashing given the required props', () => {
    const { enzymeWrapper } = setup();
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
