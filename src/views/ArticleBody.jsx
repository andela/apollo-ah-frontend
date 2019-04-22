import React from 'react';
import PropTypes from 'prop-types';
import Tags from './ArticleTags';
import clapImage from '../images/clap.svg';
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
    bookmarkArticle, bookmarked, article, token,
  } = props;
  const { Profile: profile } = article.author;
  const returnMarkup = () => ({ __html: article.body });
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
      <div className="single-body" dangerouslySetInnerHTML={returnMarkup()}>
        {/* {article.body} */}
      </div>
      <Tags />
      <div className="pg-empty-placeholder" />
      <div className="clap-grp">
        <span className="clap-icon">
          <img src={clapImage} alt="" />
          40k claps
        </span>
        <div className="share-grp">
          <div className="share__group__child">
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
          <div className="share__group__child">
            <div
              className="fb-share-button"
              data-href={decodeURI(currentUrl)}
              data-layout="button"
              data-size="small"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                data-href={`https://www.facebook.com/sharer?u=${decodeURI(currentUrl)}`}
                className="fb-xfbml-parse-ignore">
                Share
              </a>
            </div>
          </div>
          <div className="share__group__child">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-show-count="false"
            >
              Tweet
            </a>
          </div>
          <div className="share__group__child">
            <button
              onClick={debounceFn(bookmarkArticle, 500)}
              type="button"
              className="btn btn-link bookmark-btn"
            >
              <span className={`fas fa-bookmark transition ${(bookmarked) ? 'bookmarked' : ''}`} />
            </button>
          </div>
          <div className="share__group__child">
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
                  {token && (
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
      <div className="single-author-container single-article-author">
        <div className="article-author">
          <img src={profile.image} alt="author" />
          <div>
            <h6>{`${profile.firstname} ${profile.lastname}`}</h6>
            <p>{profile.bio}</p>
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
  token: PropTypes.string.isRequired,
};

export default ArticleBody;
