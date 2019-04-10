/* eslint-disable react/wrap-multilines */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer
        pauseOnFocusLoss={false}
        transition={Flip}
        className="toast-container"
        toastClassName="default-toast"
        autoClose={5000}
        position="top-right"
      />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
