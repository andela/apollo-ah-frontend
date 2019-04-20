import '@babel/polyfill';
import React from 'react';
import setup from '../setup';
import ConnectedCommentsContainer from '../../components/CommentsContainer';

const container = <ConnectedCommentsContainer slug="abc" />;

describe('<CommentsContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(container);
    expect(wrapper).toMatchSnapshot();
  });
});
