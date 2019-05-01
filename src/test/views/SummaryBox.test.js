import React from 'react';
import { shallow } from 'enzyme';
import SummaryBox from '../../views/SummaryBox';

describe('<SummaryBox>', () => {
  it('should render', () => {
    const wrapper = shallow(<SummaryBox text="" icon="" value={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
