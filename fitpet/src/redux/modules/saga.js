import { all } from 'redux-saga/effects';
import { watchLogin } from './login';
import { authSaga } from './signup';

export default function* rootSaga() {
  yield all([authSaga(), watchLogin()]);
}
