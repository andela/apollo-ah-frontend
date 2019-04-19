import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import ArticleBody from '../views/ArticleBody';
import getArticle from '../actions/singleArticleActions';
import { bookmarkArticleGenerators } from '../actions/bookmarkActions';
import * as articleSelector from '../selectors/singleArticleSelector';
import { getUserToken } from '../selectors/loginSelector';
import DummyArticleLoader from '../views/DummyArticleLoader';
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
    match: PropTypes.object,
    getArticle: PropTypes.func,
    slug: PropTypes.string,
    history: PropTypes.object,
    bookmarkArticleGenerators: PropTypes.func
  }

  static defaultProps = {
    slug: '',
    getArticle: f => f,
    match: {},
    history: {},
    bookmarkArticleGenerators: f => f
  }

  /**
   * Creates an instance of Article.
   * @param {*} props - Props passed down from the BrowserRouter
   * @memberof Article
   */
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      bookmarked: false,
      token: '',
    };
  }

  /**
   *
   *
   * @static
   * @param {*} nextProps - The new props received by the component
   * @returns {Object} - The article object to display in the page
   * @memberof Article
   */
  static getDerivedStateFromProps(nextProps) {
    const { token } = nextProps;
    const article = { ...nextProps };
    delete article.match;
    delete article.location;
    delete article.history;
    delete article.getArticle;
    delete article.staticContext;
    delete article.token;
    return { article, token };
  }

  /**
   *
   * @todo - Move the fetch article functionality to redux store
   * @memberof Article
   */
  componentDidMount = () => {
    const { match, getArticle: fetchArticle, slug: persistedSlug } = this.props;
    const { slug } = match.params;
    if (slug !== persistedSlug) fetchArticle(slug);
  }

  /**
   * @todo - employ javascript debounce to avoid calling API on repeated clicks
   * @method bookmarkArticle - The bookmark article functionality
   * @memberof Article
   */
  bookmarkArticle = () => {
    const { bookmarkArticleGenerators: bookmarkFn } = this.props;
    const { bookmarked, article, token } = this.state;
    const { slug } = article;
    this.setState({ bookmarked: !bookmarked });
    bookmarkFn({ slug, token });
  };

  /**
   *
   *
   * @returns {JSX} The JSX representation of the Article component
   * @memberof Article
   */
  render() {
    const { history } = this.props;
    const { article, bookmarked, token } = this.state;
    const { title, status } = article;
    return (
      <div>
        {!title ? <DummyArticleLoader articleStatus={status} history={history} /> : (
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
                    token={token}
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
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  message: articleSelector.getArticleMessage,
  author: articleSelector.getArticleAuthorProfile,
  isLoading: articleSelector.getArticleIsLoading,
  body: articleSelector.getArticleBody,
  title: articleSelector.getArticleTitle,
  slug: articleSelector.getArticleSlug,
  description: articleSelector.getArticleDescription,
  ratings: articleSelector.getArticleRatings,
  image: articleSelector.getArticleImage,
  readTime: articleSelector.getArticleReadTime,
  createdAt: articleSelector.getArticleCreatedTime,
  updatedAt: articleSelector.getArticleUpdatedTime,
  tagList: articleSelector.getArticleTagList,
  token: getUserToken,
});
const mapDispatchToProps = { getArticle, bookmarkArticleGenerators };

export default connect(mapStateToProps, mapDispatchToProps)(Article);
