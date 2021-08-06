import { all } from 'redux-saga/effects';
import { signUpSaga } from './signup';

export default function* rootSaga() {
  yield all([signUpSaga()]);
}
