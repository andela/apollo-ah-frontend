import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { debounce } from 'lodash';
import clapIcon from '../images/clap.svg';
import { getArticle } from '../selectors/articlesSelector';
import { getUserClaps } from '../selectors/clapsSelector';
import { fetchUserClaps } from '../actions/clapsAction';
import { clapArticleRequest } from '../actions/articleAction';

/**
 * A class representing clap button component
 *
 * @class ClapButton
 * @extends {Component}
 */
export class ClapButton extends Component {
  static propTypes = {
    article: PropType.object.isRequired,
    clapArticle: PropType.func.isRequired,
    loadUserClaps: PropType.func.isRequired,
    claps: PropType.number.isRequired,
  };

  /**
   * Handles clap request (debounced)
   *
   * @returns {void}
   * @memberof ClapButton
   */
  makeClapRequest = debounce(() => {
    const { clapArticle, article: { slug } } = this.props;
    const { claps } = this.state;
    this.setState({ claps: 0 });
    return clapArticle({ slug, claps });
  }, 1000);

  constructor(props) {
    super(props);
    this.state = {
      clapsLeft: 100 - props.claps,
      articleClaps: props.article.claps,
      claps: 0, // record clap button clicks
    };
  }

  componentDidMount = () => {
    const { article: { slug }, loadUserClaps } = this.props;
    loadUserClaps(slug);
  }

  /**
   * Handles button click
   *
   * @returns {void}
   * @memberof ClapButton
   */
  handleClick = () => {
    const { articleClaps, clapsLeft, claps } = this.state;
    if (clapsLeft >= 1) {
      this.setState({
        clapsLeft: clapsLeft - 1,
        articleClaps: articleClaps + 1,
        claps: claps + 1,
      });
      this.makeClapRequest();
    }
  }

  /**
   * Handles button click
   *
   * @returns {JSX.Element} DOM element
   * @memberof ClapButton
   */
  render() {
    const { articleClaps } = this.state;

    return (
      <span className="clap-icon">
        <button type="button" className="btn" onClick={this.handleClick}>
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
  article: getArticle,
  claps: getUserClaps,
});

const mapDispatchToProps = {
  clapArticle: claps => clapArticleRequest(claps),
  loadUserClaps: payload => fetchUserClaps(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(ClapButton);
