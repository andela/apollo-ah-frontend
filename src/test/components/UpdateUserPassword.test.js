import React from 'react';
import { shallow } from 'enzyme';
import { UpdateUserPassword } from '../../components/UpdateUserPassword';

describe('<UpdateUserPassword Test Suite>', () => {
  const props = {
    message: 'Hello',
    isLoading: false,
    updatePassword: jest.fn(),
    updatePasswordMessage: 'Password updated successfully',
  };
  const event = {
    target: {
      name: 'password',
      value: 'mypassword'
    },
    preventDefault: jest.fn(),
  };
  it('It should render succesfully when user is not logged in', () => {
    const wrapper = shallow(<UpdateUserPassword {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should update password with users password', () => {
    const wrapper = shallow(<UpdateUserPassword {...props} />);
    wrapper.instance().updateInput(event);
    expect(wrapper.instance().state.password).toEqual('mypassword');
  });
});
