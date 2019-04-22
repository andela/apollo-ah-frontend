/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../views/UserForm';

// eslint-disable-next-line no-undef
const mockFn = jest.fn();

describe('<UserForm />', () => {
  const wrapper = shallow(<UserForm resetState={f => f} />);
  it('should have a form element', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });
  it('should have at least 2 input field', () => {
    expect(wrapper.find('input').length).toBeGreaterThanOrEqual(2);
  });
  it('should have at least 2 input labels', () => {
    expect(wrapper.find('label').length).toBeGreaterThanOrEqual(2);
  });
  it('should have an email input field', () => {
    expect(wrapper.find('#email').exists()).toBe(true);
  });
  it('should have a password input field', () => {
    expect(wrapper.find('#password').exists()).toBe(true);
  });
  it('should have at least a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('the default value of the input should be an empty string', () => {
    const formJsx = shallow(<UserForm resetState={f => f} />);
    expect(formJsx.find('#email').props().value).toBe('');
  });
  it('should change the value of the email input', () => {
    const formJsx = shallow(<UserForm resetState={f => f} email="blah@gmail.com" />);
    expect(formJsx.find('#email').props().value).toBe('blah@gmail.com');
  });
  it('the default value of the password input should be an empty string', () => {
    const formJsx = shallow(<UserForm resetState={f => f} />);
    expect(formJsx.find('#password').props().value).toBe('');
  });
  it('should change the value of the password input', () => {
    const formJsx = shallow(<UserForm resetState={f => f} password="o987654321" />);
    expect(formJsx.find('#password').props().value).toBe('o987654321');
  });
  it('should call handleChange on email change', () => {
    const formJsx = shallow(<UserForm resetState={f => f} handleChange={mockFn} />);
    formJsx.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
    expect(mockFn).toHaveBeenCalled();
  });
  it('should call handleChange on password change', () => {
    const formJsx = shallow(<UserForm resetState={f => f} handleChange={mockFn} />);
    formJsx.find('#password').simulate('change', { target: { name: 'password', value: '12345' } });
    expect(mockFn).toHaveBeenCalled();
  });
  it('should submit form and call handleLogin', () => {
    const mockHandleLogin = mockFn;
    const formJsx = shallow(<UserForm resetState={f => f} handleLogin={mockHandleLogin} />);
    formJsx.find('form').simulate('submit', { preventDefault: mockFn });
    expect(mockFn).toHaveBeenCalled();
    expect(mockHandleLogin).toHaveBeenCalled();
  });
});
