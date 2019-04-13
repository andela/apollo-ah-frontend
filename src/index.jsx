import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import Routes from './routes/index.jsx';
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
