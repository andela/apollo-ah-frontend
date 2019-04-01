/* eslint-disable react/wrap-multilines */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';

function App() {
  return (
    <AppRouter />
  );
}

const appDiv = document.getElementById('app');
ReactDOM.render(<App />, appDiv);