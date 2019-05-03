import React from 'react';
import SearchContainer from '../../components/SearchContainer';
import setup from '../setup';


describe('<SearchContainer>', () => {
  it('should render', () => {
    const wrapper = setup(<SearchContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
