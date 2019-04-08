/* eslint-disable react/wrap-multilines */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
