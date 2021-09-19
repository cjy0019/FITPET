import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modal from './modal';
import signup from './signup';
import login from './login';
import hotelList from './hotelList';
import markers from './markers';
import hotelMain from './hotelMain';
import hotelAbout from './hotelAbout';
import rentcar from './rentcar';
import filteringCar from './filteringCar';

const reducer = (history) =>
  combineReducers({
    modal,
    signup,
    login,
    hotelList,
    hotelMain,
    hotelAbout,
    markers,
    rentcar,
    filteringCar,
    router: connectRouter(history),
  });

export default reducer;
