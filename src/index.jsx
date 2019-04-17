import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import Routes from './routes';
import store from './store';
import './styles/index.scss';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        pauseOnFocusLoss={false}
        transition={Flip}
        className="toast-container"
        toastClassName="default-toast"
        autoClose={3000}
        hideProgressBar
        position="top-right"
      />
    </>
  );
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
