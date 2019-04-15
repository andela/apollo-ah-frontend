/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ArticleBody from '../views/ArticleBody';
/*
 * @todo - Import comments component here
 */

export const ArticleContext = React.createContext({ article: {} });

class Article extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      bookmarked: false,
    };
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const { slug } = match.params;
    const result = await axios.get(`${process.env.API_BASE_URL}/articles/${slug}`);
    this.setState({ article: result.data.data });
  }

  bookmarkArticle = () => {
    const { bookmarked } = this.state;
    (bookmarked) ? this.setState({ bookmarked: false }) : this.setState({ bookmarked: true });
  };

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
                <ArticleContext.Provider value={article}>
                  <ArticleBody
                    bookmarkArticle={this.bookmarkArticle}
                    bookmarked={bookmarked}
                  />
                  {/* Insert omment component here */}
                </ArticleContext.Provider>
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
