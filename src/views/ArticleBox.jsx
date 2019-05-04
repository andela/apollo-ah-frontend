import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import compareDateFormat from 'date-fns/distance_in_words_strict';

export default function ArticleBox({ article }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="article">
        <Link to={`/article/${article.slug}`} className="link-surface" />
        <div className="article-cover">
          <img src={article.image} className="article-cover-img" alt={article.title} />
        </div>
        <div className="article-item">
          <span className="article-category">{article.articleCategory.category}</span>
          <h4>{article.title}</h4>
          <p>{article.description.substring(0, 100)}</p>
          <div className="article-author">
            <img src={article.User.Profile.image} alt={article.User.Profile.username} />
            <div>
              <h6>{article.User.Profile.firstname || article.User.Profile.username}</h6>
              <span>
                {compareDateFormat(article.createdAt, new Date())}
                {' '}
                 ago
              </span>
              <span className="article-author-dot" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
ArticleBox.propTypes = {
  article: PropTypes.object.isRequired,
};
