import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import time from '../utils/time';

/**
 * @description - returns all articles created by all authors
 * @param {props} articles - all authors article
 * @return {JSX}
 */
const Articles = ({ articles, showHeader }) => (
  <div className="container">
    {showHeader && (<h4>Recommended for you</h4>)}
    <div className="row">
      {articles.map(article => (
        <div key={article.id} className="col-lg-4 col-sm-6">
          <div className="article">
            <Link to={`/article/${article.slug}`} className="link-surface" />
            <div className="article-cover">
              <img
                src={article.image}
                className="article-cover-img"
                alt="article"
              />
            </div>
            <div className="article-item">
              <span className="article-category">{article.articleCategory.category}</span>
              <h4>{article.title}</h4>
              <p>
                {
                  article.description.length <= 50 ? article.description.substring(0, 50) : `${article.description.substring(0, 50)}...`
                }
              </p>
              <div className="article-author">
                <img alt="article" src={article.User.Profile.image} />
                <div>
                  <h6>{article.User.Profile.username}</h6>
                  <span>
                    {`${time(article)} ago`}
                  </span>
                  <span className="article-author-dot" />
                  <span>{article.readTime}</span>
                  <i
                    className="fas fa-bookmark transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Articles.propTypes = {
  articles: PropTypes.array,
  showHeader: PropTypes.bool,
};

Articles.defaultProps = {
  articles: [],
  showHeader: false,
};

export default Articles;
