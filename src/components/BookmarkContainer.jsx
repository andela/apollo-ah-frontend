import React from 'react';
import BookmarkItem from '../views/BookmarkItem';

/**
 * @description - returns all articles bookmarked by a user
 * @return {JSX}
 */
function BookmarkContainer() {
  return (
    <div className="container">
      <header className="page-header" data-pg-collapsed>
        <h1>Bookmarks </h1>
        <div className="btn-group btn-group-toggle float-right view-changer" data-toggle="buttons">
          <label className="btn active" onClick="changeView(true)">
            <input type="radio" name="options" autoComplete="off" checked />
            <i className="fas fa-th" />
          </label>
          <label className="btn" onClick="changeView(false)">
            <input type="radio" name="options" autoComplete="off" />
            <i className="fas fa-list" />
          </label>
        </div>
      </header>
      <div className="row view-row">
        <BookmarkItem />
        <BookmarkItem />
        <BookmarkItem />
      </div>
      {/** pagination support to be implemented later */}
      <div>Pagination is here</div>
    </div>
  );
}

export default BookmarkContainer;
