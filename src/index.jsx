/* eslint-disable react/wrap-multilines */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

const appDiv = document.getElementById('root');
ReactDOM.render(<App />, appDiv);