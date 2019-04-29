import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 *
 * @class ScrollToTopOnMount - A reusablecomponent for fixing scroll position
 * @extends {React.Component}
 */
class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTopOnMount);
