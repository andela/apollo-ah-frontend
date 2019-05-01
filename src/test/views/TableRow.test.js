import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../views/TableRow';

describe('<TableRow>', () => {
  it('should render', () => {
    const wrapper = shallow(<TableRow item={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
