import React from 'react';
import { shallow } from 'enzyme';
import { ResetPasswordForm } from '../../views/ResetPasswordForm';

const props = {
  handleSubmit: jest.fn(),
  updateInput: jest.fn()
};

const event = {
  target: {
    name: 'password',
    value: 'mypassword'
  },
  preventDefault: jest.fn(),
};

describe('<ResetPasswordForm />', () => {
  it('should take a snapshot of the component', () => {
    const wrapper = shallow(<ResetPasswordForm {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle change event', () => {
    const wrapper = shallow(<ResetPasswordForm {...props} />);
    wrapper.find('.form-control').at(0).simulate('change', event);
    expect(props.updateInput).toHaveBeenCalled();
    wrapper.find('.form-control').at(1).simulate('change', event);
    expect(props.updateInput).toHaveBeenCalled();
  });
  it('should handle submit', () => {
    const wrapper = shallow(<ResetPasswordForm {...props} />);
    wrapper.find('.reset-password-form').at(0).simulate('submit', event);
    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
