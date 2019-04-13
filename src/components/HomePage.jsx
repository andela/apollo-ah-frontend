/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Navbar from '../views/Navbar';
import Category from '../views/Category';
import { getArticles, getArticlesCategory } from '../actions';
import Articles from '../views/Articles';
import Authors from '../views/Authors';
import PlaceholderLoader from '../views/placeholderLoader';
import { getAverageRatings, totalRatings } from '../utils/getAverageRatings';
import Body from '../views/Body';
import finalRatings from '../utils/finalRatings';

/**
 * @description - returns the home page view
 * @param {props} articles - all authors article
 * @param {props} articlesCategory - articles categories
 * @return {JSX}
 */
export class HomePage extends Component {
  state = {
    fiveStarAuthors: [],
  }

  async componentDidMount() {
    const { getArticles, getArticlesCategory } = this.props;
    await Promise.all([getArticles(), getArticlesCategory()]);
  }

  /**
   * @description Gets the averahe ratings of author's article
   * @param {object} article - each authors article
   * @return {array} fiveStaAauhtors - author's rated highly
   */
  averageRatings = (article) => {
    getAverageRatings(article);
    finalRatings(totalRatings, this.found, this.setAuthorsState);
  }

  /**
 * @description set the state with start authors
 * @return {void}
 */
  setAuthorsState = rating => {
    this.setState(prevState => {
      prevState.fiveStarAuthors.concat(rating);
    });
  };

  /**
 * @description found authors
 * @param {object} rating - each authors article ratings
 * @return {array}
 */
  found = rating => {
    const { fiveStarAuthors } = this.state;
    (fiveStarAuthors.find(fiveStarAuthors => rating.authorsId === fiveStarAuthors.authorsId));
  };

  /**
 * @description Gets the recommended authors
 * @param {object} article - each authors article
 * @return {array} fiveStaAauhtors - author's rated highly
 */
  recommendedAuthor(article) {
    this.averageRatings(article);
  }

  render() {
    const {
      articles, articlesCategory, loadingArticles, loadingCategory
    } = this.props;

    const { fiveStarAuthors } = this.state;

    articles.map((article) => {
      this.recommendedAuthor(article);
    });

    return (
      <div>
        {articles === 'Articles not found' ? (
          <Body
            loadingCategory={loadingCategory}
            PlaceholderLoader={PlaceholderLoader}
            articlesCategory={articlesCategory}
            Category={Category}
          />
        ) : (
            // eslint-disable-next-line react/jsx-indent
            <Body
              loadingCategory={loadingCategory}
              PlaceholderLoader={PlaceholderLoader}
              Category={Category}
              articlesCategory={articlesCategory}
              loadingArticles={loadingArticles}
              Articles={Articles}
              allArticles={articles}
              Authors={Authors}
              fiveStarAuthors={fiveStarAuthors}
            />
          )
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  getArticles: PropTypes.func,
  articles: PropTypes.array,
  getArticlesCategory: PropTypes.func,
  articlesCategory: PropTypes.array,
  loadingArticles: PropTypes.string,
  loadingCategory: PropTypes.string,
};

HomePage.defaultProps = {
  getArticles: f => f,
  articles: [],
  getArticlesCategory: f => f,
  articlesCategory: [],
  loadingArticles: '',
  loadingCategory: '',
};

const mapStateToProps = state => ({
  articles: state.articlesReducer.articles,
  articlesCategory: state.articlesCategoryReducer.category,
  loadingArticles: state.articlesReducer.loading,
  loadingCategory: state.articlesReducer.loading,
});

export default connect(mapStateToProps, { getArticles, getArticlesCategory })(HomePage);
