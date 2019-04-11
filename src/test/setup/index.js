/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

export const stubRequest = (moxios, response, status = 200) => {
  moxios.wait(() => {
    moxios.requests.mostRecent()
      .respondWith({
        status,
        response,
      });
  });
};

export const mockState = {
  user: {
    id: 1,
    token: 'encoded',
    isLoggedIn: true,
    profile: {
      firstname: 'John',
      lastname: 'Doe',
      bio: 'I love writing',
      username: 'johnny',
      image: 'http://linktoimage.jpg',
      errorData: [],
      loading: false,
    },
  },
};

export const createMockStore = () => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  return mockStore;
};

const setup = (component) => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  const connectedWrapper = mount(
    <Provider store={mockStore(mockState)}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

export default setup;
