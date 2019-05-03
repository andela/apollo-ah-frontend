import React from 'react';
import { PropTypes } from 'prop-types';
import ArticleBox from './ArticleBox';
import CommentLoader from './CommentLoader';


export default function Search({
  result, handleSearch, q, categoryId, handleChange
}) {
  const { articles, page, loading } = result;

  let resultPanel = <CommentLoader />;
  if (!loading) {
    resultPanel = !articles || articles.length === 0
      ? (
        <header className="page-header page-header-sm text-center">
          <h4> No articles match your search result...</h4>
        </header>
      )
      : (
        <>
          <header className="page-header page-header-sm">
            <h1>
              {' '}
              Showing
              {' '}
              {page.description}
              {' '}
            </h1>
          </header>
          <div className="row">
            {articles.map(article => <ArticleBox article={article} key={article.id} />)}
          </div>
        </>
      );
  }


  return (
    <main className="main-body">
      <section className="search-cover">
        <div className="container">
          <form className="search" onSubmit={handleSearch} noValidate>
            <div className="row">
              <div className="col-sm-6 col-8">
                <i className="fas fa-search search-icon" />
                <input className="search-input no-focus" name="q" value={q} onChange={handleChange} />
              </div>
              <div className="col-sm-3 d-none d-sm-inline-block">
                <select className="custom-select search-select no-focus" name="categoryId" value={categoryId} onChange={handleChange}>
                  <option value={0}>All categories</option>
                  <option value={3}>Business</option>
                  <option value={7}>Entertainment</option>
                  <option value={4}>Fashion</option>
                  <option value={6}>Food</option>
                  <option value={5}>Health</option>
                  <option value={8}>History</option>
                  <option value={1}>Technology</option>
                  <option value={2}>Sports</option>
                  <option value={9}>Others</option>
                </select>
              </div>
              <div className="text-right col-sm-3 col-4">
                <button type="submit" className="btn btn-brand search-button shadow-none">Search</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="wrapper min-vh-100 ">
        <div className="container">
          {resultPanel}
        </div>
      </section>

    </main>
  );
}

Search.propTypes = {
  result: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  q: PropTypes.string,
  categoryId: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
Search.defaultProps = {
  q: '',
  categoryId: '0',
};
