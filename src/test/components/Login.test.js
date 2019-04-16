/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import initialState from '../../store/initialState';
import { Login } from '../../components/Login';

const mockStore = configureStore();
const mockFn = jest.fn();

describe('<UserForm />', () => {
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <Router>
        <Login location={{ pathname: '/login' }} />
      </Router>
    </Provider>
  );

  it('should respond to input change and alter state (email) of component', () => {
    const loginWrapper = wrapper.find('Login');
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'wrestle@wwe.com' } });
    wrapper.update();
    expect(loginWrapper.state('email')).toBe('wrestle@wwe.com');
    expect(wrapper.find('#email').props().value).toBe('wrestle@wwe.com');
  });
  it('should respond to input change and alter state (password) of component', () => {
    const loginWrapper = wrapper.find('Login');
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: '12345' } });
    wrapper.update();
    expect(loginWrapper.state('password')).toBe('12345');
    expect(wrapper.find('#password').props().value).toBe('12345');
  });
  it('should submit form', () => {
    const loginWrapper = wrapper.find('Login');
    loginWrapper.find('form').simulate('submit', { preventDefault: mockFn });
    expect(mockFn).toHaveBeenCalled();
  });
});
