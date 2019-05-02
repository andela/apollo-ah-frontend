import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import ClapButtonComponent from '../components/ClapButton';
import Tag from './ArticleTag';
import FollowButtonComponent from '../components/FollowButton';

import time from '../utils/time';
import debounceFn from '../utils/debounce';
/**
 *
 * @param {*} props - The props passed from the parent Article component
 * @returns {JSX} - The JSX representation of the Article's bpdy
 */
function ArticleBody(props) {
  const currentUrl = window.location.href;
  const {
    bookmarkArticle, bookmarked, article, isLoggedin,
  } = props;
  const { Profile: profile } = article.author;
  article.body = encodeURIComponent(article.body);
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
            <img src={profile.image} alt="author" />
            <div className="author__profile--details">
              <h6>{`${profile.firstname} ${profile.lastname}`}</h6>
              <span>{`${time(article)} ago`}</span>
              <span className="article-author-dot" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <div className="bookmark__div">
            <button
              onClick={debounceFn(bookmarkArticle, 500)}
              type="button"
              className="btn btn-link bookmark-btn"
              id="bookmark-btn"
            >
              <span className={`fas fa-bookmark transition ${(bookmarked) ? 'bookmarked' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <div className="single-body">
        {parser(decodeURIComponent(article.body))}
      </div>
      <div className="single-tags text-center">
        {(!article.tagList || article.tagList.length === 0) ? '' : article.tagList.map(tag => <Tag tag={tag} key={tag.tagName} />)}
      </div>
      <div className="pg-empty-placeholder" />
      <div className="clap-grp">
        <ClapButtonComponent
          articleSlug={article.slug}
          articleAuthorId={article.authorId}
          articleClaps={article.claps}
        />
        <div className="share-grp">
          <div className="share-group-child">
            <a
              href={`mailto:?subject=Check out this article on Authors Haven&body=${currentUrl}`}
              title="Share via mail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
          <div className="share-group-child">
            <a
              href={`https://www.facebook.com/sharer?u=${decodeURI(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-xfbml-parse-ignore"
              style={{ color: '#3b5998' }}
            >
              <i className="fab fa-facebook-square" />
            </a>
          </div>
          <div className="share-group-child">
            <a
              href={`https://twitter.com/intent/tweet?text=${currentUrl}`}
              data-show-count="false"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38A1F3' }}
            >
              <i className="fab fa-twitter-square" />
            </a>
          </div>
          <div className="share-group-child">
            <button
              onClick={debounceFn(bookmarkArticle, 500)}
              type="button"
              className="btn btn-link bookmark-btn"
            >
              <span className={`fas fa-bookmark transition ${(bookmarked) ? 'bookmarked' : ''}`} />
            </button>
          </div>
          <div className="share-group-child">
            <div className="dropdown article__options">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="show-options"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-h" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="show-options"
              >
                <div className="dropdown-item">
                  {isLoggedin && (
                    <div>
                      <button
                        className="btn"
                        type="button"
                      >
                        <i className="fas fa-trash text-danger" />
                        Delete Article
                      </button>
                      <div className="dropdown-divider" />
                    </div>
                  )}
                </div>

                <div className="dropdown-item">
                  <button
                    className="btn"
                    type="button"
                  >
                    <i className="fas fa-flag text-danger" />
                    Report Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-author-container single-article-author mb-5">
        <div className="article-author">
          <img src={profile.image} alt="author" />
          <div>
            <h6>{`${profile.firstname} ${profile.lastname}`}</h6>
            <p>{profile.bio}</p>
            <FollowButtonComponent
              followId={article.author.id}
              username={article.author.Profile.username}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleBody.propTypes = {
  bookmarkArticle: PropTypes.func.isRequired,
  bookmarked: PropTypes.bool,
  article: PropTypes.object.isRequired,
  isLoggedin: PropTypes.bool.isRequired,
};

ArticleBody.defaultProps = {
  bookmarked: false,
};


export default ArticleBody;
