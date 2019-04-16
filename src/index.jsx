/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/wrap-multilines */
import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Routes from './routes';
import reduxStore from './store';
import './styles/index.scss';

/**
 * @constant store - the persisted store
 * @constant persistor - the persistor function from redux-persist
 * @function App - the wrapped App imported from the routes
 * @returns {JSX} - The wrapped app's JSX
 */
const { store, persistor } = reduxStore;
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

const appDiv = document.getElementById('root');
ReactDOM.render(<App />, appDiv);