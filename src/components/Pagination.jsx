/* eslint-disable no-shadow */
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { getBookmarkedArticles } from '../actions/getBookmark';
import * as selectors from '../selectors/getBookmarkSelector';

/**
 * @description - paginates articles
 * @param {props} getArticles - action to get all articles
 * @param {props} last - represets the last page after articles are splitted by pages
 * @return {JSX}
 */
class Pagination extends Component {
  /**
   * @description - handles each click in the pagination bar
   * @param {props} selected - represents the page we are selecting
   * @return {void}
   */
  handlePageClick = async ({ selected }) => {
    const { getBookmarkedArticles } = this.props;
    const articlesSize = 6;
    // adding 1 because selected start from 0 while our articles page start from 1
    await getBookmarkedArticles(selected + 1, articlesSize);
    // Scroll the window to the top/beginning of articles for better user experience
    window.scrollTo({
      top: 10,
      behavior: 'smooth',
    });
  }

  render() {
    const { lastPage } = this.props;
    return (
      <div className="container">
        <ReactPaginate
          previousLabel={<i className="fas fa-chevron-left" />}
          nextLabel={<i className="fas fa-chevron-right" />}
          breakLabel="..."
          breakClassName="pagination-list"
          breakLinkClassName="pagination-anchor-tag"
          pageCount={lastPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName="pagination justify-content-center mt-5"
          pageClassName="pagination-list"
          pageLinkClassName="pagination-anchor-tag"
          onPageChange={this.handlePageClick}
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  lastPage: PropTypes.number.isRequired,
  getBookmarkedArticles: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    lastPage: selectors.getLastPage,
  }
);

export default connect(mapStateToProps, { getBookmarkedArticles })(Pagination);
