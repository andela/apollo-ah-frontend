import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '../setup';
import Wrapper from '../../views/common/Wrapper';

createMockStore();

describe('<Wrapper>', () => {
  it('should render without crashing', () => {
    const container = (
      <Wrapper>
        <p>Hello</p>
      </Wrapper>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
