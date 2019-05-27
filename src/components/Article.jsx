import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import ArticleBody from '../views/ArticleBody';
import getArticle from '../actions/singleArticleActions';
import { bookmarkArticleGenerators } from '../actions/bookmarkActions';
import * as articleSelector from '../selectors/singleArticleSelector';
import bookmarkedList from '../selectors/bookmarkSelector';
import { getUserIsLoggedIn } from '../selectors/loginSelector';
import DummyArticleLoader from '../views/DummyArticleLoader';
import SuggestedArticles from '../views/Articles';
import { getArticles } from '../actions';
import ScrollToTopOnMount from '../views/ScrollToTopOnMount';
import ConnectedCommentsContainer from './CommentsContainer';

/**
 * @class Article
 * @extends {React.Component}
 */
class Article extends React.Component {
  /**
   * @static - Validating proptypes
   * @memberof Article
   */
  static propTypes = {
    match: PropTypes.object,
    getArticle: PropTypes.func,
    slug: PropTypes.string,
    history: PropTypes.object,
    bookmarkArticleGenerators: PropTypes.func,
    getArticles: PropTypes.func,
    isLoggedin: PropTypes.bool,
    articleClaps: PropTypes.number.isRequired,
  }

  static defaultProps = {
    slug: '',
    getArticle: f => f,
    match: {},
    history: {},
    bookmarkArticleGenerators: f => f,
    getArticles: f => f,
    isLoggedin: false,
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
      isLoggedin: false,
      recommendations: [],
    };
  }

  /**
   * @static
   * @param {*} nextProps - The new props received by the component
   * @returns {Object} - The article object to display in the page
   * @memberof Article
   */
  static getDerivedStateFromProps(nextProps) {
    const {
      token, recommendations, bookmarkedList: bookmarkedArticles, id,
    } = nextProps;
    const article = { ...nextProps };
    delete article.match;
    delete article.location;
    delete article.history;
    delete article.getArticle;
    delete article.staticContext;
    delete article.isLoggedin;
    const alreadyBookmarked = bookmarkedArticles.findIndex(post => post.articleId === id);
    const bookmarked = alreadyBookmarked !== -1;
    return {
      article, token, recommendations, bookmarked,
    };
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { slug } = match.params;
    const { getArticle: fetchArticle } = prevProps;
    if (slug !== prevProps.slug) fetchArticle(slug);
    return this.state;
  }

  /**
   *
   * @method componentDidMount - A method called when the component mounts
   * @memberof Article
   */
  componentDidMount = async () => {
    const {
      match,
      getArticle: fetchArticle,
      slug: persistedSlug,
      getArticles: getRecommendations
    } = this.props;
    const { slug } = match.params;
    if (slug !== persistedSlug) fetchArticle(slug);
    await getRecommendations(1, 3);
  }

  /**
   * @todo - employ javascript debounce to avoid calling API on repeated clicks
   * @method bookmarkArticle - The bookmark article functionality
   * @memberof Article
   */
  bookmarkArticle = () => {
    const { bookmarkArticleGenerators: bookmarkFn, history, isLoggedin } = this.props;
    const { bookmarked, article } = this.state;
    if (!isLoggedin) history.push('/login');
    const { slug } = article;
    this.setState({ bookmarked: !bookmarked });
    bookmarkFn({ slug });
  };

  /**
   * @returns {JSX} The JSX representation of the Article component
   * @memberof Article
   */
  render() {
    const {
      article, bookmarked, isLoggedin, recommendations,
    } = this.state;
    const { match, articleClaps } = this.props;
    const { slug } = match.params;
    return (
      <div>
        <ScrollToTopOnMount />
        {!article.title ? <DummyArticleLoader /> : (
          <main className={(article.image) ? 'main-article' : 'main-article-no-image'}>
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
                    article={Object.assign(article, { claps: articleClaps })}
                    bookmarkArticle={this.bookmarkArticle}
                    bookmarked={bookmarked}
                    isLoggedin={isLoggedin}
                  />
                  <ConnectedCommentsContainer slug={slug} />
                </div>
              </div>
              <div className="single-suggested-grp">
                <div className="row pg-empty-placeholder" />
                <SuggestedArticles
                  articles={recommendations}
                  showHeader
                />
              </div>
            </section>
          </main>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  id: articleSelector.getArticleId,
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
  isLoggedin: getUserIsLoggedIn,
  articleClaps: articleSelector.getArticleClaps,
  recommendations: articleSelector.getRecommendedArticles,
  bookmarkedList,
});
const mapDispatchToProps = { getArticle, bookmarkArticleGenerators, getArticles };

export default connect(mapStateToProps, mapDispatchToProps)(Article);
