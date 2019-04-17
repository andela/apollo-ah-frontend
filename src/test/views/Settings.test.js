import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '../setup';
import Settings from '../../views/Settings';

createMockStore();

describe('<Settings>', () => {
  it('should render', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper).toBeDefined();
  });
});
