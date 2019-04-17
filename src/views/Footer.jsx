import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description - returns the app footer
 * @return {JSX}
 */
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div>
        <Link to="/" className="logo">
            Authors Haven
        </Link>
        <Link to="/authors">Authors</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/search">
          <i className="fas fa-search" />
          {' '}
            Search
        </Link>
        <Link to="/terms" className="pull-right terms">
            Terms &amp; Conditions
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
