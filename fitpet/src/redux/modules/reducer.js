import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modal from './modal';
import signup from './signup';
import login from './login';

const reducer = (history) =>
  combineReducers({
    modal,
    signup,
    login,
    router: connectRouter(history),
  });

export default reducer;
