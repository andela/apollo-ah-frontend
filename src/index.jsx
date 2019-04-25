import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Routes from './routes';
import reduxStore from './store';
import './styles/index.scss';

const { store, persistor } = reduxStore;

/**
 * @constant store - the persisted store
 * @constant persistor - the persistor function from redux-persist
 * @function App - the wrapped App imported from the routes
 * @returns {JSX} - The wrapped app's JSX
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <ToastContainer
          pauseOnFocusLoss={false}
          transition={Flip}
          className="toast-container"
          toastClassName="default-toast"
          autoClose={5000}
          position="top-right"
        />
      </PersistGate>
    </Provider>
  );
}

const appDiv = document.getElementById('root');
ReactDOM.render(<App />, appDiv);
