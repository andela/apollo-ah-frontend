import React from 'react';
import { shallow } from 'enzyme';
import { ResetPassword } from '../../components/ResetPassword';

describe('<ResetPassword Test Suite>', () => {
  const props = {
    isLoading: false,
    resetPassword: jest.fn(),
    message: 'Password updated successfully',
    history: {
      push: jest.fn()
    }
  };
  const event = {
    target: {
      name: 'password',
      value: 'mypassword'
    },
    preventDefault: jest.fn(),
  };
  it('It should render succesfully when user is not logged in', () => {
    const wrapper = shallow(<ResetPassword {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should update password with users password', () => {
    const wrapper = shallow(<ResetPassword {...props} />);
    wrapper.instance().updateInput(event);
    expect(wrapper.instance().state.password).toEqual('mypassword');
  });
  it('should change users password', async () => {
    const wrapper = shallow(<ResetPassword {...props} />);
    await wrapper.setState({
      password: 'Password1',
      confirmPassword: 'Password1'
    });
    wrapper.instance().handleSubmit(event);
  });
});
