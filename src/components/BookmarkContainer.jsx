/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BookmarkItem from '../views/BookmarkItem';
import { getBookmarkedArticles } from '../actions/getBookmark';
import * as selectors from '../selectors/getBookmarkSelector';

/**
 * @description - returns all articles bookmarked by a user
 * @return {JSX}
 */
function BookmarkContainer(props) {
  const [viewType, setViewType] = useState('row view-row');

  const { articles } = props;

  const getArticlesHandler = () => {
    props.getBookmarkedArticles();
  };

  const changeViewToHorizontal = () => {
    setViewType('row view-row list-view');
  };

  const changeViewToVertical = () => {
    setViewType('row view-row');
  };

  useEffect(() => (
    getArticlesHandler()
  ), []);

  return (
    <>
      <header className="page-header" data-pg-collapsed>
        <h1>Bookmarks </h1>
        <div className="btn-group btn-group-toggle float-right view-changer" data-toggle="buttons">
          <label className="btn active" onClick={changeViewToVertical}>
            <input type="radio" name="options" autoComplete="off" checked value="" />
            <i className="fas fa-th" />
          </label>
          <label className="btn" onClick={changeViewToHorizontal}>
            <input type="radio" name="options" autoComplete="off" value="list-view" />
            <i className="fas fa-list" />
          </label>
        </div>
      </header>
      {
        articles.articles.length !== 0
          ? (
            <>
              <div className={viewType}>
                {
                  // eslint-disable-next-line arrow-body-style
                  articles.articles.map((article, indx) => {
                    return (
                      <BookmarkItem
                        key={indx}
                        category={article.Article.articleCategory.category}
                        image={article.Article.image}
                        articleTitle={article.Article.title}
                        articleDescription={article.Article.description}
                        authorsName={article.Article.User.Profile.firstname}
                        authorsImage={article.Article.User.Profile.image}
                        readTime={article.Article.readTime}
                      />
                    );
                  })
                }
              </div>
              {/** pagination support to be implemented later */}
              <div>Pagination is here</div>
            </>
          ) : <div>
            <i className="fas fa-book-open" style={{ fontSize: '70px', color: '#66008c' }} />
            <p style={{ paddingTop: '30px' }}>*It looks like you have not bookmarked any article yet</p>
          </div>
      }
    </>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectors.getBookmarkLoading,
    articles: selectors.getBookmarkArticles,
  }
);

export default connect(mapStateToProps, { getBookmarkedArticles })(BookmarkContainer);
