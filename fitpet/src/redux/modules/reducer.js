import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modal from './modal';
import signup from './signup';
import login from './login';
import hotelList from './hotelList';
import markers from './markers';

const reducer = (history) =>
  combineReducers({
    modal,
    signup,
    login,
    hotelList,
    markers,
    router: connectRouter(history),
  });

export default reducer;
