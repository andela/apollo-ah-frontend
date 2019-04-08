import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ categories, authors, bookmark, search, write, login }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light"
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
          data-pg-collapsed
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarToggler17"
          data-pg-collapsed
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
                {" "}
                {categories}{" "}
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink18"
              >
                <Link className="dropdown-item" to="/business">
                  Business
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/entertainment">
                  Entertainment
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/fashion">
                  Fashion
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/food">
                  Food
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/health">
                  Health
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/history">
                  History
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/technology">
                  Technology
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/sports">
                  Sports
            </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/others">
                  Others
            </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authors">
                {authors} <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" data-pg-collapsed>
              <Link className="nav-link" to="/bookmark">
                {bookmark}
              </Link>
            </li>
            <li className="nav-item" data-pg-collapsed>
              <Link className="nav-link" to="/search">
                <i className="fas fa-search" /> {search}
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mt-lg-0">
            <li className="nav-item" data-pg-collapsed>
              <Link
                className="nav-link btn-cta transition btn-brand"
                to="/write"
                data-pg-collapsed
              >
                <i className="fas fa-pen transition" />{write}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                {login}
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown nav-profile" data-pg-collapsed>
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="nav-profile"
              src="#"
            />
          </button>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <Link className="dropdown-item" to="#">
              Write an articlLink
        </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/search-articles">
              Search articles
        </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/dashboard">
              My Dashboard
        </Link>
            <Link className="dropdown-item" to="/profile">
              My Profile
        </Link>
            <Link className="dropdown-item" to="/bookmarks">
              My Bookmarks
        </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/following">
              Following
        </Link>
            <Link className="dropdown-item" to="/followers">
              Followers
        </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/settings">
              Settings
        </Link>
            <Link className="dropdown-item" to="/logout">
              Logout
        </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  categories:  PropTypes.string,
  authors: PropTypes.string,
  search: PropTypes.string,
  write: PropTypes.string,
  login: PropTypes.string,
  bookmark: PropTypes.string,
};

export default Navbar;
