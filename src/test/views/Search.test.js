import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '../setup';
import Search from '../../views/Search';

createMockStore();

const props = {
  result: {},
  handleSearch: jest.fn(),
  q: '',
  categoryId: '0',
  handleChange: jest.fn(),
};

describe('<Search>', () => {
  it('should render', () => {
    const wrapper = shallow(<Search {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with non empty search result', () => {
    props.result.articles = [{ id: 1 }];
    props.result.page = { description: '' };

    const wrapper = shallow(<Search {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
