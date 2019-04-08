/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FacebookButton from '../../../views/common/FacebookButton';

describe('<FacebookButton />', () => {
  it('should render facebook button', () => {
    const enzymeWrapper = shallow(<FacebookButton handleResponse={jest.fn()} />);
    expect(enzymeWrapper.exists()).toBe(true);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
