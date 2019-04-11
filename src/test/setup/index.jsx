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
  isLoading: false,
  responseMessage: false,
};

export const createMockStore = () => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  return mockStore;
};

const setup = (component, initailState = mockState) => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  const connectedWrapper = mount(
    <Provider store={mockStore(initailState)}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

export default setup;