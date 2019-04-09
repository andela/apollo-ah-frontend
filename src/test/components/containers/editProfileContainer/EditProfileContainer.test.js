import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import EditProfileContainer from '../../../../components/containers/EditProfileContainer';

const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });

const setup = () => {
  const initialState = {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      bio: 'I love writing',
      username: 'johnny',
      image: 'http://linktoimage.jpg',
      token: 'encoded',
      errorData: []
    },
    loading: {
      updatingProfile: false,
      updatingProfileImage: false
    },
    updateProfile: jest.fn(),
  };

  const connectedWrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <EditProfileContainer activePage="PROFILE" />
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

describe('<EditProfileContainer>', () => {
  it('should render all children components', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
