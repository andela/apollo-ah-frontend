/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Search from '../views/Search';

/**
 * Container component for the search view
 * @export
 * @class SearchContainer
 * @extends {Component}
 */
export default class SearchContainer extends Component {
  render() {
    return (
      <>
        <Search />
      </>
    );
  }
}
