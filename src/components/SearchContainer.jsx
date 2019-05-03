import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formDataJSON from 'formdata-json';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSearchResult } from '../selectors/searchSelector';
import { search } from '../actions/searchAction';
import Search from '../views/Search';

/**
 * Container component for the search view
 * @export
 * @class SearchContainer
 * @extends {Component}
 */
class SearchContainer extends Component {
  state ={
    q: '',
    categoryId: '0',
  }

  async componentDidMount() {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    await this.initValues(query);
    this.search(query);
  }

  initValues = (query) => {
    const { q, categoryId } = query;
    this.setState({
      q,
      categoryId,
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    const query = formDataJSON(new FormData(event.target));
    if (query.categoryId === '0') {
      delete query.categoryId;
    }
    this.search(query);
  }

  search = (query) => {
    const { search: performSearch } = this.props;
    performSearch(query);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { searchResult } = this.props;
    const { q, categoryId } = this.state;
    return (
      <Search
      result={searchResult}
      handleSearch={this.handleSearch}
      handleChange={this.handleChange}
      q={q}
      categoryId={categoryId}
      />
    );
  }
}

SearchContainer.propTypes = {
  searchResult: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector(
  {
    searchResult: getSearchResult,
  }
);
const mapDispatchToProps = dispatch => ({
  search: query => dispatch(search(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
