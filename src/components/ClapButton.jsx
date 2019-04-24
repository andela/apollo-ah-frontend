/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { debounce } from 'lodash';
import { withRouter } from 'react-router-dom';
import clapIcon from '../images/clap.svg';
import * as articleSelector from '../selectors/singleArticleSelector';
import { getAuthId, getIsAuthenticated } from '../selectors/authSelector';
import { getToken } from '../selectors/profileSelector';
import { clapArticleRequest, fetchUserClaps } from '../actions/clapsAction';
import { getUserClaps } from '../selectors/clapsSelector';
import { CLAPS_LIMIT, CLAPS_REQUEST_TIMER } from '../utils/contants';

/**
 * A class representing clap button component
 *
 * @class ClapButton
 * @extends {Component}
 */
export class ClapButton extends Component {
  /**
   * Handles clap request (debounced)
   *
   * @returns {void}
   * @memberof ClapButton
   */
  makeClapRequest = debounce(() => {
    const { clapArticle, articleSlug: slug, token } = this.props;
    const { clapsCount: claps } = this.state;
    this.setState({ clapsCount: 0 });
    return clapArticle({ slug, claps, token });
  }, CLAPS_REQUEST_TIMER);

  static propTypes = {
    articleSlug: PropType.string.isRequired,
    articleAuthorId: PropType.number.isRequired,
    articleClaps: PropType.number.isRequired,
    clapArticle: PropType.func.isRequired,
    isLoggedIn: PropType.bool.isRequired,
    userId: PropType.number,
    history: PropType.object.isRequired,
    token: PropType.string.isRequired,
    userClaps: PropType.number.isRequired,
    loadUserClaps: PropType.func.isRequired,
  };

  static defaultProps = {
    userId: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      clapsLeft: CLAPS_LIMIT - props.userClaps,
      articleClaps: props.articleClaps,
      clapsCount: 0, // record clap button clicks
    };
  }

  componentDidMount = async () => {
    const {
      articleSlug: slug,
      isLoggedIn,
      userId,
      loadUserClaps
    } = this.props;
    if (isLoggedIn) {
      loadUserClaps({ slug, userId });
    }
  }

  /**
   * Makes an article clap
   *
   * @returns {void}
   * @memberof ClapButton
   */
  handleClapArticle = () => {
    const {
      isLoggedIn,
      userId,
      articleAuthorId,
      history,
    } = this.props;

    if (!isLoggedIn) { // redirect guest users to login
      history.push('/login');
      return false;
    }
    // Deny article's author
    if (articleAuthorId === userId) return false;
    const { articleClaps, clapsLeft, clapsCount } = this.state;
    if (clapsLeft >= 1) {
      this.setState({
        clapsLeft: clapsLeft - 1,
        articleClaps: articleClaps + 1,
        clapsCount: clapsCount + 1,
      });
      this.makeClapRequest();
    }
  }

  /**
   * React render function
   *
   * @returns {JSX.Element} DOM element
   * @memberof ClapButton
   */
  render() {
    const { articleClaps } = this.state;

    return (
      <span className="clap-icon">
        <button type="button" className="btn" onClick={this.handleClapArticle}>
          <img src={clapIcon} alt="" />
        </button>
        {articleClaps}
        {' '}
        claps
      </span>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  articleSlug: articleSelector.getArticleSlug,
  articleAuthorId: articleSelector.getArticleAuthorId,
  articleClaps: articleSelector.getArticleClaps,
  isLoggedIn: getIsAuthenticated,
  userId: getAuthId,
  token: getToken,
  userClaps: getUserClaps,
});

const mapDispatchToProps = {
  clapArticle: claps => clapArticleRequest(claps),
  loadUserClaps: payload => fetchUserClaps(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ClapButton));
