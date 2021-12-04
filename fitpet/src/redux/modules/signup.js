import { call, delay, put, takeEvery } from 'redux-saga/effects';
import AuthService from '../../api/services/AuthService';
import { closeSignUp, signupSuccessOpen } from './modal';

// namespace
const namespace = 'fitpet/signup/';

// action types
const START = namespace + 'START';
const SUCCESS = namespace + 'SUCCESS';
const FAIL = namespace + 'FAIL';

// initial state
const initialState = { isLoading: false, error: null, status: null };

// action creators
export const signupStart = () => ({ type: START, status: null });
export const signupSuccess = (status) => ({ type: SUCCESS, status });
export const signupFail = (error) => ({ type: FAIL, error });

// reducer
export default function signup(state = initialState, action) {
  switch (action.type) {
    case START:
      return { ...state, isLoading: true };

    case SUCCESS:
      return { ...state, isLoading: false, status: action.status };

    case FAIL:
      return { error: action.error, isLoading: false };
    default:
      return state;
  }
}

// saga
const SIGNUP_SAGA = namespace + '/SIGNUP_SAGA';

export const signupSagaStart = (userId, userPW, userName) => ({
  type: SIGNUP_SAGA,
  payload: { userId, userPW, userName },
});

export function* signupSaga(action) {
  try {
    yield put(signupStart());
    yield delay(1800);

    const { userId, userPW, userName } = action.payload;

    const response = yield call(AuthService.signup, userId, userPW, userName);

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
