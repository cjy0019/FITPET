import { call, delay, put, takeEvery } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';

// namespace
const namespace = 'fitpet/signup/';

// action types
const START = namespace + 'START';
const SUCCESS = namespace + 'SUCCESS';
const FAIL = namespace + 'FAIL';

// initial state
const initialState = { error: null };

// action creators
export const signupStart = () => ({ type: START });
export const signupSuccess = () => ({ type: SUCCESS });
export const signupFail = (error) => ({ type: FAIL, error });

// reducer
export default function signup(state = initialState, action) {
  switch (action.type) {
    case START:
      return { error: null };

    case SUCCESS:
      return { error: null };

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

    const resultCode = yield call(AuthService.signup(userId, userPW));
    console.log(resultCode);
    // yield delay(1000);

    // if (resultCode === 0) console.log('성공');
    // else if (resultCode === 1) console.log('중복');

    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFail(error));
  }
}

export function* signUpSaga() {
  yield takeEvery(SIGNUP_SAGA, signupSaga);
}
