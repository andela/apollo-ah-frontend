import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '../setup';
import Search from '../../views/Search';

createMockStore();

describe('<Search>', () => {
  it('should render', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
