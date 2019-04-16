/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';

import AlertMessage from '../../views/AlertMessage';


// eslint-disable-next-line no-undef
const mockFn = jest.fn();

describe('<AlertMessage />', () => {
  it('should have a div', () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
  it('should have a p', () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.find('p').exists()).toBe(true);
  });
  it('should have a button', () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('should have a p tag with a class of alert', () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.findWhere(p => p.hasClass('alert')).exists()).toBe(true);
  });
  it('should have a p tag with a default class of alert-danger', () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.findWhere(p => p.hasClass('alert-danger')).exists()).toBe(true);
  });
  it('should have a p tag with a class of alert-success if messageType is success', () => {
    const wrapper = shallow(<AlertMessage status="success" />);
    expect(wrapper.findWhere(p => p.hasClass('alert-success')).exists()).toBe(true);
  });
  it('should have a button tag with a class of close', () => {
    const wrapper = shallow(<AlertMessage />);
    expect(wrapper.findWhere(button => button.hasClass('close')).exists()).toBe(true);
  });
  it('should call reset state when button is clicked', () => {
    const wrapper = shallow(<AlertMessage notification="Hello" resetState={mockFn} />);
    wrapper.find('button').simulate('click', { resetstate: f => f });
    expect(mockFn).toHaveBeenCalled();
  });

});