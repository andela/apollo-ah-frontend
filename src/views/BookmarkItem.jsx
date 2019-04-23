import React from 'react';

/**
 * @description - returns a single bookmark item card
 * @return {JSX}
 */

function BookmarkItem() {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="article transition">
        <a href="single-article.html" className="link-surface">link </a>
        <div className="article-cover">
          <img alt="" src="assets/images/articles/tim-gouw-68319-unsplash.jpg" className="article-cover-img transition" />
        </div>
        <div className="article-item">
          <span className="article-category">Technology</span>
          <h4>5 ways to manage your time effectively.</h4>
          <p>Distinctively reconceptualize high standards in...</p>
          <div className="article-author">
            <img alt="" src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
            <div>
              <h6>Alexandra</h6>
              <span>22 hrs ago</span>
              <span className="article-author-dot" />
              <span>4 min read</span>
              <i className="fas fa-bookmark transition bookmarked" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkItem;
