import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modal from './modal';
import signup from './signup';

const reducer = (history) =>
  combineReducers({
    modal,
    signup,
    router: connectRouter(history),
  });

export default reducer;
