/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import FooterImage from '../../public/images/background/Image.png';

/**
 * @description - returns the body of the landing page
 * @param {props} loadingCategory - loading status for categories
 * @param {props} PlaceholderLoader - placeholder element to show when articles is
 * been fetched from the API
 * @param {props} articlesCategory - categories belonging to articles
 * @param {props} loadingArticles - loading status for articles
 * @param {props} Articles - prop in representing articles
 * @param {props} articles - all articles
 * @param {props} Authors - all authors
 * @param {props} fiveStarAuthors - authors with highest rarting
 * @return {JSX}
 */
const Body = ({
  loadingCategory,
  PlaceholderLoader,
  Category,
  articlesCategory,
  loadingArticles,
  Articles,
  allArticles,
  Authors,
  fiveStarAuthors,
}) => (
  <main className="main-body">
    <section className="hero overlay">
      <div className="container">
        <div className="hero-inner">
          <h1>Write and share your ideas with the world</h1>
          <p>
              Join a community of like-minded authors to foster
              inspiration and innovation by leveraging the modern web.
          </p>
          <Link className="btn-brand" to="/signup">
              Get Started
          </Link>
        </div>
      </div>
    </section>

    <section>
      <div className="heading heading-no-spacing">
        <div className="container">
          <h3>
            <Link
                to="/categories"
                className="btn-brand btn-secondary transition"
              >
                More &gt;&gt;
            </Link>
              Browse by Category
          </h3>
        </div>
      </div>
      {loadingCategory === 'started' ? <PlaceholderLoader /> : <Category begin={0} end={6} articlesCategory={articlesCategory} />}

    </section>

    {Articles ? (
      <section>
        <div className="heading">
          <div className="container">
            <h3>
              <Link
                  to="/search"
                  className="btn-brand btn-secondary transition"
                >
                  More &gt;&gt;
              </Link>
                Recently Published
            </h3>
          </div>
        </div>
        {loadingArticles === 'started' ? <PlaceholderLoader /> : <Articles articles={allArticles} />}
      </section>
    ) : ''}

    {Authors ? (
      <section>
        <div className="heading">
          <div className="container">
            <h3>
              <Link
                  to="authors.html"
                  className="btn-brand btn-secondary transition"
                >
                  More &gt;&gt;
              </Link>
                Recommended Authors
            </h3>
          </div>
        </div>
        {loadingArticles === 'started' ? <PlaceholderLoader /> : Authors ? <Authors authors={fiveStarAuthors} begin={0} end={6} /> : ''}
      </section>
    ) : ''}


    <section className="cta">
      <div className="container">
        <div className="row">
          <div className="order-md-5 col-md-5">
            <div className="text-center">
              <img alt="" src={FooterImage} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="cta-inner">
              <h2>Bring your creative writing skills to life</h2>
              <p>
                  With tools to make every part of your process more human
                  and a support team excited to help you, getting started
                  with inbound has never been easier.
              </p>
              <Link to="/signup" className="btn-brand">
                  Start Writing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

Body.propTypes = {
  loadingCategory: Proptypes.string,
  PlaceholderLoader: Proptypes.func,
  Category: Proptypes.func,
  articlesCategory: Proptypes.array,
  loadingArticles: Proptypes.string,
  Articles: Proptypes.func,
  allArticles: Proptypes.array,
  Authors: Proptypes.func,
  fiveStarAuthors: Proptypes.array,
};

Body.defaultProps = {
  loadingCategory: '',
  PlaceholderLoader: f => f,
  Category: f => f,
  articlesCategory: [],
  loadingArticles: Proptypes.string,
  Articles: f => f,
  allArticles: Proptypes.array,
  Authors: f => f,
  fiveStarAuthors: [],
};

export default Body;
