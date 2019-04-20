import React from 'react';
import PropTypes from 'prop-types';
import Tags from './ArticleTags';
import clapImage from '../images/clap.svg';
/**
 *
 * @param {*} props - The props passed from the parent Article component
 * @returns {JSX} - The JSX representation of the Article's bpdy
 */
function ArticleBody(props) {
  const { bookmarkArticle, bookmarked, article } = props;
  return (
    <div>
      <h1 className="signle-title">{article.title}</h1>
      <p
        className="single-sub"
        style={{ fontSize: 21, color: '#9c9c9c', fontWeight: 'bold' }}
      >
        {article.description}
        {' '}
      </p>
      <div className="single__author__container">
        <div className="article__author">
          <div className="author__profile--mini">
            <img src={article.image} alt="" />
            <div className="author__profile--details">
              <h6>Alexandra</h6>
              <span>22 hrs ago</span>
              <span className="article-author-dot" />
              <span>4 min read</span>
            </div>
          </div>
          <div className="bookmark__div">
            <button onClick={bookmarkArticle} type="button">
              <span className={`fas fa-bookmark transition ${(bookmarked) ? 'bookmarked' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <div className="single-body">
        {article.body}
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
          <img src={article.image} alt="" />
          <div>
            <h6>Alexandra</h6>
            <p>Journalist, author, dad. Former TIME magazine editor and foreign correspondent. </p>
            <button type="button" className="btn btn-light">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleBody.propTypes = {
  bookmarkArticle: PropTypes.func.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  article: PropTypes.object.isRequired,
};

export default ArticleBody;
