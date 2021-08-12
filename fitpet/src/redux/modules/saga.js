import { all } from 'redux-saga/effects';
import { authSaga } from './signup';

export default function* rootSaga() {
  yield all([authSaga()]);
}
