/* eslint-disable no-shadow */
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getArticles } from '../actions';

/**
 * @description - paginates articles
 * @param {props} getArticles - action to get all articles
 * @param {props} last - represets the last page after articles are splitted by pages
 * @return {JSX}
 */
export class Pagination extends Component {
  /**
   * @description - handles each click in the pagination bar
   * @param {props} selected - represents the page we are selecting
   * @return {void}
   */
  handlePageClick = async ({ selected }) => {
    const { getArticles } = this.props;
    const articlesSize = 12;
    // adding 1 because selected start from 0 while our articles page start from 1
    await getArticles(selected + 1, articlesSize);
    // Scroll the window to the top/beginning of articles for better user experience
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  }

  render() {
    const { last } = this.props;
    return (
      <div className="container">
        <ReactPaginate
          previousLabel={<i className="fas fa-chevron-left" />}
          nextLabel={<i className="fas fa-chevron-right" />}
          breakLabel="..."
          breakClassName="pagination-list"
          breakLinkClassName="pagination-anchor-tag"
          pageCount={last}
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
  last: PropTypes.number.isRequired,
  getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  last: state.articlesReducer.page.last,
  description: state.articlesReducer.page.description,
});

export default connect(mapStateToProps, { getArticles })(Pagination);
