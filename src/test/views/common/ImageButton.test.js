/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageButton from '../../../views/common/ImageButton';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    imgSrc: 'image.png',
    onClick: jest.fn(),
    altText: 'alt',
  };

  const enzymeWrapper = shallow(<ImageButton {...props} />);
  return { props, enzymeWrapper };
}

describe('<ImageButton />', () => {  
  it('renders without crashing given the required props', () => {
    const { enzymeWrapper } = setup();
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });

  it('should render a button with image', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('button')).toHaveLength(1);
    expect(enzymeWrapper.find('img')).toHaveLength(1);
  });
});
