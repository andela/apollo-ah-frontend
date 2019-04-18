import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore, mockState } from '../setup';
import CreateArticle from '../../views/CreateArticle';

createMockStore();
const { profile } = mockState.user;


describe('<CreateArticle>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(
      <CreateArticle
        isLoading={false}
        handleUpdateProfile={jest.fn()}
        profile={profile}
        token="encoded"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errorData', () => {
    mockState.user.errorData = [{}];
    const wrapper = shallow(
      <CreateArticle
        updateInputHandler={jest.fn}
        updateBodyHandler={jest.fn()}
        updateTagHandler={jest.fn()}
        imageUploadHandler={jest.fn()}
        submitHandler={jest.fn()}
        valueText="article body"
        isLoading={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
