import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { followUserAction, fetchFollowersAction } from '../actions/followAction';
import { getAuthUsername, getIsAuthenticated } from '../selectors/authSelector';
import { getFollowing, getFollowIsLoading } from '../selectors/followersSelector';

/**
 * Class representing follow button
 *
 * @class FollowButton
 * @extends {Component}
 */
export class FollowButton extends Component {
  static propTypes = {
    followId: PropType.number,
    username: PropType.string.isRequired,
    followRequest: PropType.func.isRequired,
    isLoggedIn: PropType.bool.isRequired,
    authUsername: PropType.string,
    history: PropType.object.isRequired,
    following: PropType.array.isRequired,
    isLoading: PropType.bool.isRequired,
    loadFollowers: PropType.func.isRequired,
  };

  static defaultProps = {
    authUsername: null,
    followId: null,
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
   * Validates user follower
   *
   * @param {number} - The follower id
   * @returns {boolean} Returns truthy if already a follower, else falsy
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
});

const mapDispatchToProps = {
  followRequest: (type, username) => followUserAction(type, username),
  loadFollowers: type => fetchFollowersAction(type),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FollowButton));
