/* eslint-disable react/jsx-filename-extension */
import '@babel/polyfill';
import React from 'react';
import setup from '../setup/index';
import  ConnectedLogin from '../../components/Login';

// eslint-disable-next-line no-undef
const mockFn = jest.fn();

location = {
  pathname: '',
};

describe('<UserForm />', () => {

  it('should respond to input change and alter state (email) of component', () => {
    const wrapper = setup(<ConnectedLogin location={location} />);
    const loginWrapper = wrapper.find('Login');
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'wrestle@wwe.com' } });
    wrapper.update();
    expect(loginWrapper.state('email')).toBe('wrestle@wwe.com');
    expect(wrapper.find('#email').props().value).toBe('wrestle@wwe.com');
  });
  it('should respond to input change and alter state (password) of component', () => {
    const wrapper = setup(<ConnectedLogin location={location} />);
    const loginWrapper = wrapper.find('Login');
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: '12345' } });
    wrapper.update();
    expect(loginWrapper.state('password')).toBe('12345');
    expect(wrapper.find('#password').props().value).toBe('12345');
  });
  it('should submit form', () => {
    const wrapper = setup(<ConnectedLogin location={location} />);
    const loginWrapper = wrapper.find('Login');
    loginWrapper.find('.login__input__section form').simulate('submit', { preventDefault: mockFn });
    expect(mockFn).toHaveBeenCalled();
  });
  it('should submit form', () => {
    const wrapper = setup(<ConnectedLogin location={location} />);
    wrapper.find('#myModal form').simulate('submit', { preventDefault: mockFn });
    expect(mockFn).toHaveBeenCalled();
  });
});
