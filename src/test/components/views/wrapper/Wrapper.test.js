import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wrapper from '../../../../components/views/common/Wrapper';

configure({ adapter: new Adapter() });

describe('<Wrapper>', () => {
  it('should render ', () => {
    const container = (
      <Wrapper>
        <p>Hello</p>
      </Wrapper>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
