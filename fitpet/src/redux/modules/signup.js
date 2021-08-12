import { call, put, takeEvery } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';
import { closeSignUp, signupSuccessOpen } from './modal';

// namespace
const namespace = 'fitpet/signup/';

// action types
const START = namespace + 'START';
const SUCCESS = namespace + 'SUCCESS';
const FAIL = namespace + 'FAIL';

// initial state
const initialState = { error: null, status: null };

// action creators
export const signupStart = () => ({ type: START, status: null });
export const signupSuccess = (status) => ({ type: SUCCESS, status });
export const signupFail = (error) => ({ type: FAIL, error });

// reducer
export default function signup(state = initialState, action) {
  switch (action.type) {
    case START:
      return { ...state };

    case SUCCESS:
      return { ...state, status: action.status };

    case FAIL:
      return { error: action.error };
    default:
      return state;
  }
}

// saga
const SIGNUP_SAGA = namespace + '/SIGNUP_SAGA';

export const signupSagaStart = (userId, userPW) => ({
  type: SIGNUP_SAGA,
  payload: { userId, userPW },
});

export function* signupSaga(action) {
  try {
    yield put(signupStart());

    const { userId, userPW } = action.payload;

    const response = yield call(AuthService.signup, userId, userPW);

    yield put(signupSuccess(response.data));

    if (response.data === 'OK') {
      yield put(closeSignUp());
      yield put(signupSuccessOpen());
    }
  } catch (error) {
    yield put(signupFail(error.message));
  }
}

export function* authSaga() {
  yield takeEvery(SIGNUP_SAGA, signupSaga);
}
