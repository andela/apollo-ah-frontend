import React from 'react';
import { shallow } from 'enzyme';
import PageLoader from '../../views/PageLoader';

describe('<PageLoader />', () => {
  it('should render the PagLoader', () => {
    const wrapper = shallow(<PageLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
