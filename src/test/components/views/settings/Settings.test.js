import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Settings from '../../../../components/views/Settings';

configure({ adapter: new Adapter() });

describe('<Settings>', () => {
  it('should render', () => {
    const wrapper = shallow(<Settings />);
    expect(wrapper).toBeDefined();
  });
});
