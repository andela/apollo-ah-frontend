import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Home Page</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default HomePage;
