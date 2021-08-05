import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modal from './modal';

const reducer = (history) =>
  combineReducers({
    modal,
    router: connectRouter(history),
  });

export default reducer;
