import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ArticleBody from '../views/ArticleBody';
import { fetchArticle } from '../actions/articleAction';
import { getArticle } from '../selectors/articlesSelector';

/*
 * @todo - Import comments component here
 */

/**
 *
 *
 * @class Article
 * @extends {React.Component}
 */
class Article extends React.Component {
  /**
   *
   * @static - Validating proptypes
   * @memberof Article
   */
  static propTypes = {
    match: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    loadArticle: PropTypes.func.isRequired,
  }

  /**
   * Creates an instance of Article.
   * @param {*} props - Props passed down from the BrowserRouter
   * @memberof Article
   */
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
    };
  }

  /**
   *
   * @todo - Move the fetch article functionality to redux store
   * @memberof Article
   */
  componentDidMount = () => {
    const { match, loadArticle } = this.props;
    const { slug } = match.params;
    loadArticle(slug);
  }

  /**
   * @todo - employ javascript debounce to avoid calling API on repeated clicks
   * @method bookmarkArticle - The bookmark article functionality
   * @memberof Article
   */
  bookmarkArticle = () => {
    const { bookmarked } = this.state;
    this.setState({ bookmarked: !bookmarked });
  };

  /**
   *
   *
   * @returns {JSX} The JSX representation of the Article component
   * @memberof Article
   */
  render() {
    const { bookmarked } = this.state;
    const { article } = this.props;
    return (
      <div>
        <main className="main-body">
          <section className="min-vh-100">
            {article.image && (
              <div
                className="pg-empty-placeholder single-hero"
                style={{ backgroundImage: `url(${article.image})` }}
              />
            )}
            <div className="container">
              <div className="single-container">
                <ArticleBody
                  article={article}
                  bookmarkArticle={this.bookmarkArticle}
                  bookmarked={bookmarked}
                  applaud={this.applaud}
                />
                {/* Insert omment component here */}
              </div>
            </div>
            <div className="single-suggested-grp">
              <div className="container">
                <h4>Recommended for you</h4>
                <div className="row pg-empty-placeholder" />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  article: getArticle,
});

const mapDispatchToProps = {
  loadArticle: slug => fetchArticle(slug),
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
