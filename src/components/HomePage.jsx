/* eslint-disable no-unused-vars */
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
        <p>Hello World</p>
        <a Link="/login" href="/login">Login </a>
      </div>
    );
  }
}

export default HomePage;
