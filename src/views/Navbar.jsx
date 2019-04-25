import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/**
 * @description - returns customized navigation bar for the app
 * @return {JSX}
 */
const Navbar = ({ isLoggedIn, profile }) => (
  <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${isLoggedIn && 'navbar-logged'}`}
      id="navbar"
    >
    <div className="container">
      <Link className="navbar-brand" to="/">
          Authors Haven
      </Link>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler17"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"

        >
        <span className="navbar-toggler-icon" />
      </button>
      <div
          className="collapse navbar-collapse"
          id="navbarToggler17"

        >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <Link
                className="nav-link dropdown-toggle"
                to="/categories"
                id="navbarDropdownMenuLink18"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              Categories
              {' '}
            </Link>
            <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink18"
              >
              <Link className="dropdown-item" to="/search?categoryId=3">
                  Business
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=7">
                  Entertainment
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=4">
                  Fashion
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=6">
                  Food
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=5">
                  Health
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=8">
                  History
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=1">
                  Technology
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=2">
                  Sports
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/search?categoryId=9">
                  Others
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/authors">
              Authors
              {' '}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/bookmark">
              Bookmarks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              <i className="fas fa-search" />
              {' '}
              Search
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mt-lg-0">
          <li className="nav-item">
            <Link
                className="nav-link btn-cta transition btn-brand"
                data-pg-collapsed
                to="/user/create-article"
              >
              <i className="fas fa-pen transition" />
              Write an article
            </Link>
          </li>
          {
            !isLoggedIn
            && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
              Login
              </Link>
            </li>
            )
          }
        </ul>
      </div>
      {
     isLoggedIn
    && (
      <div className="dropdown nav-profile">
        <button
    className="btn dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
          <img
        alt={profile.username}
      className="nav-profile"
      src={profile.image}
    />
        </button>
        <div
    className="dropdown-menu dropdown-menu-right"
    aria-labelledby="dropdownMenuButton"
  >
          <Link className="dropdown-item" to="/user/create-article">
      Write an article
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/search">
      Search articles
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/user/dashboard">
      My Dashboard
          </Link>
          <Link className="dropdown-item" to="/user/profile">
      My Profile
          </Link>
          <Link className="dropdown-item" to="/user/bookmarks">
      My Bookmarks
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/user/following">
      Following
          </Link>
          <Link className="dropdown-item" to="/user/followers">
      Followers
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item" to="/user/settings">
      Settings
          </Link>
          <Link className="dropdown-item" to="/login">
      Logout
          </Link>
        </div>
      </div>

    )
  }
    </div>
  </nav>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Navbar;
