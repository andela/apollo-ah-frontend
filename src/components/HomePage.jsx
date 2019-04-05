import React from 'react';

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
