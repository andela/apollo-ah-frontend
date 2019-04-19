import React from 'react';
import 'jest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import reduxStore from '../../store';
import ConnectedPagination, { Pagination } from '../../components/Pagination';

const { store } = reduxStore;
const props = {
  getArticles: jest.fn(),
  last: 4,
};

describe('<Pagination Test Suite>', () => {
  describe('<Pagination>', () => {
    it('It should render unconnected pagination succesfully', async (done) => {
      const wrapper = await shallow(<Pagination {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      wrapper.instance().handlePageClick();
      done();
    });
    it('It should render connected pagination succesfully', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <ConnectedPagination {...props} />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
