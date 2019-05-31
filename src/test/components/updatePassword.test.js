import React from 'react';
import { shallow } from 'enzyme';
import UpdatePassword from '../../views/UpdatePassword';

describe('<UpdateUserPassword Test Suite>', () => {
  const props = {
    updateInput: jest.fn(),
    handleSubmit: jest.fn(),
    updatePasswordMessage: 'Password successfully updated'
  };
  it('It should render succesfully when user is not logged in', () => {
    const wrapper = shallow(<UpdatePassword {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
