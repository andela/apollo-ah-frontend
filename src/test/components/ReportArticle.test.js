/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import ReportArticle from '../../components/ReportArticle';

describe.only('<ReportArticle Test Suite>', () => {
  describe('<ReportArticle>', () => {
    it('It should render succesfully', () => {
      const wrapper = shallow(<ReportArticle />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
