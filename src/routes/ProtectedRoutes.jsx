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
import CreateArticleContainer from '../components/CreateArticles';


/**
 * Container component for protected pages. Users must log in to access these pages
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
          <Route path="/user/create-article" component={CreateArticleContainer} />
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
