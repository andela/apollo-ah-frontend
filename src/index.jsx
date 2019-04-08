/* eslint-disable react/wrap-multilines */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index.jsx';
import store from './store';
import './styles/index.scss';



function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
