import React from 'react';
import 'jest';
import { shallow } from 'enzyme';
// import reduxStore from '../../store';
import { Pagination } from '../../components/Pagination';

// const { store } = reduxStore;
const props = {
  getArticles: jest.fn(),
  last: 4,
  selected: 1
};
window.scrollTo = jest.fn();

describe('<Pagination Test Suite>', () => {
  it('It should render unconnected pagination succesfully', async (done) => {
    const wrapper = await shallow(<Pagination {...props} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().handlePageClick({ selected: 1 });
    expect(props.getArticles).toHaveBeenCalled();
    done();
  });
});
