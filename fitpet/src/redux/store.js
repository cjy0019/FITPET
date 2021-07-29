import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './modules';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
