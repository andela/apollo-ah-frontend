import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { followUserAction, fetchFollowersAction } from '../actions/followAction';
import { getAuthUsername, getIsAuthenticated } from '../selectors/authSelector';
import { getFollowing, getFollowIsLoading } from '../selectors/followersSelector';
import { getToast } from '../selectors/commonSelector';
import { clearToast } from '../actions/toastAction';

/**
 * Class representing follow button
 *
 * @class FollowButton
 * @extends {Component}
 */
class FollowButton extends Component {
  static propTypes = {
    followId: PropType.number,
    username: PropType.string.isRequired,
    followRequest: PropType.func.isRequired,
    isLoggedIn: PropType.bool.isRequired,
    authUsername: PropType.string,
    history: PropType.object.isRequired,
    following: PropType.array.isRequired,
    isLoading: PropType.bool.isRequired,
    toaster: PropType.string,
    clearToaster: PropType.func.isRequired,
    loadFollowers: PropType.func.isRequired,
  };

  static defaultProps = {
    authUsername: null,
    followId: null,
    toaster: null,
  };

  /**
   * Called immediately after a component is mounted
   *
   * @memberof FollowButton
   */
  componentDidMount() {
    const { loadFollowers } = this.props;
    loadFollowers('following');
  }

  /**
   * Is invoked immediately after updating occurs
   *
   * @param {object} prevProps - The previous props value
   * @returns {void}
   * @memberof FollowButton
   */
  componentDidUpdate(prevProps) {
    const { toaster, clearToaster } = this.props;
    if (toaster && (toaster !== prevProps.toaster)) {
      toast.success(toaster);
    }
    if (toaster && (toaster === prevProps.toaster)) {
      clearToaster();
    }
  }

  /**
   * Validates user follower
   *
   * @param {number} - The follower id
   * @returns {boolean} The followed user
   * @memberof FollowButton
   */
  isFollowing = (followerId) => {
    const { following } = this.props;
    return !!(following.find(user => user.id === followerId));
  }

  /**
   * Handles follow button click
   *
   * @returns {void}
   * @memberof FollowButton
   */
  handleClick = () => {
    const {
      isLoggedIn,
      history,
      authUsername,
      username,
      followId,
      followRequest,
    } = this.props;

    if (!isLoggedIn) {
      history.push('/login');
      return false;
    }

    if (authUsername === username) {
      toast.info('Sorry, you cannot follow yourself');
      return false;
    }

    if (!this.isFollowing(followId)) {
      followRequest('follow', username);
    }
  }

  /**
   * React render method
   *
   * @returns {JSX.Element}
   * @memberof FollowButton
   */
  render() {
    const { followId, isLoading } = this.props;
    const isFollowing = this.isFollowing(followId);
    return (
      <button
        type="button"
        className={`btn btn-${isFollowing ? 'following' : 'follow'}`}
        onClick={this.handleClick}>
        {!isLoading && (isFollowing ? 'Following' : 'Follow')}
        {isLoading && <span className="spinner-border text-light" />}
      </button>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authUsername: getAuthUsername,
  isLoggedIn: getIsAuthenticated,
  following: getFollowing,
  isLoading: getFollowIsLoading,
  toaster: getToast,
});

const mapDispatchToProps = {
  followRequest: (type, username) => followUserAction(type, username),
  clearToaster: () => clearToast(),
  loadFollowers: type => fetchFollowersAction(type),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FollowButton));
