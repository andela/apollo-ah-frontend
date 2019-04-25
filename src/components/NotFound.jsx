/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getRecommendedArticles } from '../selectors/singleArticleSelector';
import SuggestedArticles from '../views/Articles';
import { getArticles } from '../actions';

/**
 *
 *
 * @class NotFound
 * @extends {React.Component}
 */
class NotFound extends React.Component {
  static propTypes = {
    getArticles: PropTypes.func.isRequired,
  }

  /**
   * The component state
   * @memberof NotFound
   */
  state = {
    recommendations: [],
  };

  /**
   *
   *
   * @static
   * @param {*} nextProps - The value of the props to be recieved next
   * @returns {object} recommendations - The suggested/recommended articles
   * @memberof NotFound
   */
  static getDerivedStateFromProps(nextProps) {
    const { recommendations } = nextProps;
    return { recommendations };
  }

  /**
   *
   * @method componentDidMount - Method called when component mounts
   * @memberof NotFound
   */
  componentDidMount = async () => {
    const { getArticles: fetchArticles } = this.props;
    await fetchArticles(3);
  }

  /**
   *
   * @method render - renders the jsx
   * @returns {JSX} - the jsx representation of the NotFound component
   * @memberof NotFound
   */
  render() {
    const { recommendations } = this.state;
    return (
      <main className="main-body">
        <section className="wrapper min-vh-100 not-found">
          <div className="not-found-intro">
            <div className="container">
              <header>
                <p>
                  <span role="image" aria-label="Smiley">😔</span>
                </p>
                <h1>404 - PAGE NOT FOUND</h1>
                <p>
                  It looks like you are trying to access a page that
                  has been deleted or never existed.
                </p>
                <p>
                  You can find more impactful acticles  on our
                  {' '}
                  <Link to="/">home page.</Link>
                </p>
              </header>
              <form className="form" action="/search" method="get">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <i className="fas fa-search" />
                  </div>
                  <input type="text" className="form-control" placeholder="Search Authors Haven" name="q" autoComplete="off" />
                  <div className="input-group-prepend">
                    <button className="btn" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="container">
            <header className="page-header">
              <h2>Try these articles</h2>
            </header>
            <SuggestedArticles articles={recommendations} />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  recommendations: getRecommendedArticles,
});
const mapDispatchToProps = { getArticles };

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
