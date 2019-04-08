import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../views/Navbar.jsx';
import Footer from '../views/Footer.jsx';
import Category from '../views/Category.jsx';
import { getArticles, getArticlesCategory } from '../actions';
import FooterImage from '../../public/images/background/Image.png';
import Articles from '../views/Articles.jsx';
import Authors from '../views/Authors.jsx';

let sum = 0;
let average = 0;
let authorAndAverageRatings;
const totalRatings = [];
export class HomePage extends Component {
  state = {
    fiveStarAuthors: [],
  }
  async componentDidMount() {
    const { getArticles, getArticlesCategory } = this.props;
    await Promise.all([getArticles(), getArticlesCategory()]);
  }

  averageRatings(article) {
    article.ratings.map(rating => {
      sum = sum + rating.stars;
      average = sum / article.ratings.length;
      sum = 0;
      authorAndAverageRatings = { 
        articleId: article.id,
        articleTitle: article.title,
        averageRatings: average,
        authorsProfile: article.User.Profile,
        authorsId: article.User.id,
      };
      totalRatings.push(authorAndAverageRatings);
    });
    totalRatings.map(async rating => {
      if(rating.averageRatings === 5) {
        const found = this.state.fiveStarAuthors.find( fiveStarAuthors => {
          return rating.authorsId === fiveStarAuthors.authorsId;
        });
        if (!found) {
          await this.setState({
            fiveStarAuthors: [...this.state.fiveStarAuthors, rating],
          });
        }
      } else if (rating.averageRatings === 4) {
        const found = this.state.fiveStarAuthors.find( fiveStarAuthors => {
          return rating.authorsId === fiveStarAuthors.authorsId;
        });
        if (!found) {
          await this.setState({
            fiveStarAuthors: [...this.state.fiveStarAuthors, rating],
          });
        }
      } else if (rating.averageRatings === 3) {
        const found = this.state.fiveStarAuthors.find( fiveStarAuthors => {
          return rating.authorsId === fiveStarAuthors.authorsId;
        });
        if (!found) {
          await this.setState({
            fiveStarAuthors: [...this.state.fiveStarAuthors, rating],
          });
        }
      } else if (rating.averageRatings === 2) {
        const found = this.state.fiveStarAuthors.find( fiveStarAuthors => {
          return rating.authorsId === fiveStarAuthors.authorsId;
        });
        if (!found) {
          await this.setState({
            fiveStarAuthors: [...this.state.fiveStarAuthors, rating],
          });
        }
      } else if (rating.averageRatings === 1) {
        const found = this.state.fiveStarAuthors.find( fiveStarAuthors => {
          return rating.authorsId === fiveStarAuthors.authorsId;
        });
        if (!found) {
          await this.setState({
            fiveStarAuthors: [...this.state.fiveStarAuthors, rating],
          });
        }
      }
    });
  }

  recommendedAuthor(article) {
    this.averageRatings(article);
  }

  render() {
    const { articles, articlesCategory } = this.props;
    articles.map(article => {
      this.recommendedAuthor(article);
    });
    
    return (
      <div>

        <Navbar
        categories={'Categories'}
        authors={'Authors'}
        bookmark={'Bookmarks'}
        search={'Search'}
        write={'Write an areticle'}
        login={'Login'}
        />

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

            <Category  begin={0} end={6} articlesCategory={articlesCategory} />
            
          </section>

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

            <Articles articles={articles}/>

          </section>
          
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

            <Authors authors={this.state.fiveStarAuthors} begin={0} end={6} />

          </section>

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

          <Footer />
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  getArticlesCategory: PropTypes.func.isRequired,
  articlesCategory: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articlesReducer.articles,
  articlesCategory: state.articlesCategoryReducer.category
});

export default connect(mapStateToProps, {getArticles, getArticlesCategory})(HomePage); 
