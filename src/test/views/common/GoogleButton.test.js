/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoogleButton from '../../../views/common/GoogleButton';

describe('<GoogleButton />', () => {
  it('should render google button', () => {
    const enzymeWrapper = shallow(<GoogleButton handleResponse={jest.fn()} />);
    expect(enzymeWrapper.exists()).toBe(true);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
