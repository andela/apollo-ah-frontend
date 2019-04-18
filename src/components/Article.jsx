import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ArticleBody from '../views/ArticleBody';
import CommentsContainer from './CommentsContainer';

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
    };
  }

  /**
   *
   * @todo - Move the fetch article functionality to redux store
   * @memberof Article
   */
  componentDidMount = async () => {
    const { match } = this.props;
    const { slug } = match.params;
    const result = await axios.get(`${process.env.API_BASE_URL}/articles/${slug}`);
    this.setState({ article: result.data.data });
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
    const { article, bookmarked } = this.state;
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
                />
                <CommentsContainer />
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

export default Article;
