/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BookmarkItem from '../views/BookmarkItem';
import bookmarkedArticles from '../actions/getBookmark';
import * as selectors from '../selectors/getBookmarkSelector';

/**
 * @description - returns all articles bookmarked by a user
 * @return {JSX}
 */
function BookmarkContainer(props) {
  const [viewType, setViewType] = useState('');

  const { isLoading, articles } = props;

  const getArticlesHandler = () => {
    props.bookmarkedArticles();
  };

  const changeView = (event) => {
    console.log('yooo');
    const listViewType = event.target.value;
    setViewType(listViewType);
  };

  useEffect(() => (
    getArticlesHandler()
  ), []);

  console.log(isLoading, articles[0], '+++>');
  return (
    <>
      <header className="page-header" data-pg-collapsed>
        <h1>Bookmarks </h1>
        <div className="btn-group btn-group-toggle float-right view-changer" data-toggle="buttons">
          <label className="btn active">
            <input type="radio" name="options" autoComplete="off" checked value="" onClick={event => changeView(event)} />
            <i className="fas fa-th" />
          </label>
          <label className="btn">
            <input type="radio" name="options" autoComplete="off" value="list-view" onClick={event => changeView(event)} />
            <i className="fas fa-list" />
          </label>
        </div>
      </header>
      {
        articles.length === 0
          ? (
            <div>
              <i className="fas fa-book-open" style={{ fontSize: '70px', color: '#66008c' }} />
              <p style={{ paddingTop: '30px' }}>*It looks like you have not bookmarked any article yet</p>
            </div>)
          : (
            <>
              <div className={`row view-row ${viewType}`}>
                {
                  articles.map((article, indx) => (
                    <BookmarkItem
                     key={indx}
                     articleImage={article.Article.image}
                     articleCategory={article.Article.articleCategory.category}
                    />
                  ))
              }
              </div>
              {/** pagination support to be implemented later */}
              <div>Pagination is here</div>
            </>
          )
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

export default connect(mapStateToProps, { bookmarkedArticles })(BookmarkContainer);
