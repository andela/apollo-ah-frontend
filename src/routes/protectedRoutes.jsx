/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Wrapper from '../views/common/Wrapper';
import EditProfileContainer from '../components/EditProfileContainer';
import SettingsContainer from '../components/SettingsContainer';
import DashboardContainer from '../components/DashboardContainer';
import BookmarkContainer from '../components/BookmarkContainer';
import { getIsLoggedIn } from '../selectors/navbarSelector';


/**
 * Container component for protected pages
 * @export
 * @class ProtectedContainer
 * @extends {Component}
 */
class ProtectedContainer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (<Redirect to="/login" />);
    }
    return (
      <Wrapper>
        <Switch>
          <Route path="/user/bookmarks" component={BookmarkContainer} />
          <Route path="/user/profile" component={EditProfileContainer} />
          <Route path="/user/dashboard" component={DashboardContainer} />
          <Route path="/user/settings" component={SettingsContainer} />
        </Switch>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: getIsLoggedIn,
});

ProtectedContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(ProtectedContainer);
