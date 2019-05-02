import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description - returns a single bookmark item card
 * @return {JSX}
 */

function BookmarkItem(props) {
  const {
    category,
    image,
    articleTitle,
    articleDescription,
    authorsName,
    authorsImage,
    articleSlug,
    readTime,
  } = props;

  return (
    <div className="col-lg-4 col-sm-6">
      <Link to={`/article/${articleSlug}`} className="link-surface" />
      <div className="article transition">
        <div className="article-cover">
          <img alt="" src={image} className="article-cover-img transition" />
        </div>
        <div className="article-item">
          <span className="article-category">{category}</span>
          <h4>{articleTitle}</h4>
          <p>{articleDescription}</p>
          <div className="article-author">
            <img alt="" src={authorsImage} />
            <div>
              <h6>{authorsName}</h6>
              <span className="article-author-dot" />
              <span>{readTime}</span>
              <i className="fas fa-bookmark transition bookmarked" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkItem;
