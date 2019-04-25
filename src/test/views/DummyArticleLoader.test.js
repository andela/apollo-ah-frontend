import React from 'react';
import setup from '../setup';
import DummyArticleLoader from '../../views/DummyArticleLoader';


describe('<NotFound />', () => {
  it('should render the component', () => {
    const wrapper = setup(<DummyArticleLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
