import { call, delay, put, takeEvery } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';
import { closeLogin } from './modal';

// namespace
const namespace = 'fitpet/login';

// action types
const START = namespace + 'START';
const SUCCESS = namespace + 'SUCCESS';
const FAIL = namespace + 'FAIL';

// initial state
const initialState = { userName: null, token: null, error: null };

// reducer
export default function login(state = initialState, action) {
  switch (action.type) {
    case START:
      return { userName: null, token: null, error: null };

    case SUCCESS:
      return { ...state, userName: action.userName, token: action.token };

    case FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

// action creators
export const loginStart = () => ({ type: START });
export const loginSuccess = (token, userName) => ({
  type: SUCCESS,
  token,
  userName,
});
export const loginFail = (error) => ({ type: FAIL, error });

// saga
const LOGIN_SAGA = namespace + '/LOGIN_SAGA';

export const loginSagaStart = (userId, userPW) => ({
  type: LOGIN_SAGA,
  payload: { userId, userPW },
});

export function* loginSaga(action) {
  try {
    yield put(loginStart());
    const { userId, userPW } = action.payload;

    const response = yield call(AuthService.login, userId, userPW);
    yield delay(1000);

    let userName = response.data.userId;
    const index = userName.indexOf('@');
    userName = userName.split('').splice(0, index).join('');
    localStorage.setItem('token', response.data._id);
    localStorage.setItem('userName', userName);

    yield put(loginSuccess(response.data._id, userName));

    yield put(closeLogin());
  } catch (error) {
    yield put(loginFail(error));
  }
}

// watch saga
export function* watchLogin() {
  yield takeEvery(LOGIN_SAGA, loginSaga);
}
