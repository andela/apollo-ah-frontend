/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Tags from './ArticleTags';
import { ArticleContext } from '../components/Article';
import clapImage from '../images/clap.svg';

function ArticleBody(props) {
  const { bookmarkArticle, bookmarked } = props;
  return (
    <ArticleContext.Consumer>
      {context => (
        <div>
          <h1 className="signle-title">{context.title}</h1>
          <p
            className="single-sub"
            style={{ fontSize: 21, color: '#9c9c9c', fontWeight: 'bold' }}
          >
            {context.description}
            {' '}
          </p>
          <div className="single__author__container">
            <div className="article__author">
              <div className="author__profile--mini">
                <img src={context.image} alt="" />
                <div className="author__profile--details">
                  <h6>Alexandra</h6>
                  <span>22 hrs ago</span>
                  <span className="article-author-dot" />
                  <span>4 min read</span>
                </div>
              </div>
              <div className="bookmark__div">
                <i
                  className={
                    `fas fa-bookmark transition ${(bookmarked) ? 'bookmarked' : ''}`
                  }
                  onClick={bookmarkArticle}
                />
              </div>
            </div>
          </div>
          {/* <div className="single-author-container" style={{ marginBottom: 40, marginTop: 40, }}>
            <div className="article-author">
              <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" alt="" />
              <div>
                <h6>Alexandra</h6>
                <span>22 hrs ago</span>
                <span className="article-author-dot" />
                <span>4 min read</span>
                <i className="fas fa-bookmark transition" onClick={bookmarkArticle}> Bookmark</i>
              </div>
            </div>
          </div> */}
          <div className="single-body">
            {context.body}
          </div>
          <Tags />
          <div className="pg-empty-placeholder" />
          <div className="clap-grp">
            <span className="clap-icon">
              <img src={clapImage} alt="" />
              40k claps
            </span>
            <div className="share-grp">
              <a href="you" className="text-danger"><i className="fas fa-envelope" /></a>
              <a href="you" className="text-primary"><i className="fab fa-facebook-square" /></a>
              <a href="you" className="text-white"><i className="fab fa-twitter-square text-info" /></a>
              <a href="you" className="text-muted"><i className="fas fa-bookmark" /></a>
              <a href="you" className="text-muted"><i className="fas fa-ellipsis-h" /></a>
            </div>
          </div>
          <div className="single-author-container single-article-author">
            <div className="article-author">
              <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" alt="" />
              <div>
                <h6>Alexandra</h6>
                <p>Journalist, author, dad. Former TIME magazine editor and foreign correspondent. </p>
                <button type="button" className="btn btn-light">Follow</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ArticleContext.Consumer>
  );
}

ArticleBody.propTypes = {
  bookmarkArticle: PropTypes.func.isRequired,
  bookmarked: PropTypes.bool.isRequired,
};

export default ArticleBody;
