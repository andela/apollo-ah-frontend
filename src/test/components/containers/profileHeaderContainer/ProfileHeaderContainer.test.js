import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import ProfileHeaderContainer from '../../../../components/containers/ProfileHeaderContainer';

const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });
const mockFn = jest.fn();

window.cloudinary = {
  createUploadWidget: () => ({
    open: mockFn,
  }),
};

const setup = () => {
  const initialState = {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      bio: 'I love writing',
      username: 'johnny',
    },
    loading: {
      updatingProfileImage: false
    },
    showLoader: jest.fn(),
    updateProfile: jest.fn(),
  };

  const connectedWrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <ProfileHeaderContainer activePage="PROFILE" />
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

describe('<ProfileHeaderContainer>', () => {
  it('should render all children components', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('should open cloudinary widget', () => {
    const wrapper = setup();
    expect(wrapper.find('.change-image').simulate('click', mockFn));
    expect(window.cloudinary.createUploadWidget().open).toHaveBeenCalled();
  });
});
