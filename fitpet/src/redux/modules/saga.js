import { all } from 'redux-saga/effects';
import { watchHotelList } from './hotelList';
import { watchLogin } from './login';
import { authSaga } from './signup';
import { watchHotelMain } from './hotelMain';

export default function* rootSaga() {
  yield all([authSaga(), watchLogin(), watchHotelList(), watchHotelMain()]);
}
