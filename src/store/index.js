import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import initialState from './initialState';

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
