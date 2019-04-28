import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDashboard, getDashboardSummary } from '../selectors/dashboardSelector';
import { getProfile } from '../selectors/profileSelector';
import Dashboard from '../views/Dashboard';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import { getDashboardArticles } from '../actions/dashboardAction';
import CommentLoader from '../views/CommentLoader';

/**
 * Container component for the Dashboard view
 * @export
 * @class DashboardContainer
 * @extends {Component}
 */
class DashboardContainer extends Component {
  async componentDidMount() {
    const { profile: { id } } = this.props;
    const { getDashboardArticles: fetchDashboardArticles } = this.props;
    await fetchDashboardArticles(id);
  }

  render() {
    const { dashboard, summary } = this.props;
    return (
      <>
        <ProfileHeaderContainer activePage="DASHBOARD" />
        {
          dashboard.loading
            ? <CommentLoader />
            : <Dashboard summary={summary} dashboard={dashboard} />
        }
      </>
    );
  }
}

DashboardContainer.propTypes = {
  dashboard: PropTypes.object.isRequired,
  summary: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getDashboardArticles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    dashboard: getDashboard,
    summary: getDashboardSummary,
    profile: getProfile,
  }
);
const mapDispatchToProps = dispatch => ({
  getDashboardArticles: payload => dispatch(getDashboardArticles(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
