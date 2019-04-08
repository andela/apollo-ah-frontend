import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Articles extends Component {

  // Get time when an article was created
  time(article) {
    // Get the time an article was created and subtract current time
    let time = Math.abs(new Date(article.createdAt) - new Date());
    // get the year an article was created
    if (time >= 31556952000) {
      time = time / 31556952000; // 31556952000 represents 1 year in miliseconds
      if (Math.trunc(time) > 1) {
        return `${Math.trunc(time)} years ago`;
      }
      return `${Math.trunc(time)} year ago`;
    } else if (time >= 2629800000) { // get the month(s) an article was created
      time = time / 2629800000; // 2629800000 represents 1 month in miliseconds
      if (Math.trunc(time) > 1) {
        return `${Math.trunc(time)} months ago`;
      }
      return `${Math.trunc(time)} month ago`;
    } else if (time >= 86400000) { // get the day(s) an article was created
      time = time / 86400000; // 86400000 represents 1 day in miliseconds
      if (Math.trunc(time) > 1) {
        return `${Math.trunc(time)} days ago`;
      }
      return `${Math.trunc(time)} day ago`;
    } else if (time >= 3600000) { // get the hour(s) an article was created
      time = time / 3600000; // 3600000 represents 1 hour in miliseconds
      if (Math.trunc(time) > 1) {
        return `${Math.trunc(time)} hours ago`;
      } else {
        return `${Math.trunc(time)} hour ago`;
      }
    } else if (time >= 60000) { // get minute(s) an article was created
      time = time / 60000; // 60000 represents 1 minute in miliseconds
      if (Math.trunc(time) > 1) {
        return `${Math.trunc(time)} minutes ago`;
      }
      return `${Math.trunc(time)} minute ago`;
    } else if (time >= 1000) { // get the second(s) an article was created
      time = time / 1000; // 1000 represents 1 second in miliseconds
      if (Math.trunc(time) > 1) {
        return `${Math.trunc(time)} seconds ago`;
      }
      return `${Math.trunc(time)} second ago`;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.articles.map(article => (
            <div key={article.id} className="col-lg-4 col-sm-6">
              <div className="article">
                <Link to="/single-article" className="link-surface" />
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
                      article.description.length <= 50 ? article.description.substring(0, 50) : article.description.substring(0, 50) + '...'
                    }
                  </p>
                  <div className="article-author">
                    <img alt="article" src={article.User.Profile.image} />
                    <div>
                      <h6>{article.User.Profile.username}</h6>
                      <span>{this.time(article)}</span>
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
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Articles;
