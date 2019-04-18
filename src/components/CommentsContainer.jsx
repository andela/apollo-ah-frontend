/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Comments from '../views/Comments';

/**
 * Container component for the Article comments view
 * @export
 * @class CommentsContainer
 * @extends {Component}
 */
export default class CommentsContainer extends Component {
  render() {
    return (
      <Comments />
    );
  }
}
