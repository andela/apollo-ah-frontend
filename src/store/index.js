/* eslint-disable react/wrap-multilines */
/* eslint-disable react/require-extension */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
