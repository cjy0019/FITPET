import { call, delay, put, takeEvery } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';
import { closeLogin } from './modal';

// namespace
const namespace = 'fitpet/login';

// action types
const START = namespace + '/START';
const SUCCESS = namespace + '/SUCCESS';
const FAIL = namespace + '/FAIL';
const LOGOUT = namespace + '/LOGOUT';

// initial state
const initialState = { userName: null, token: null, error: null };

// reducer
export default function login(state = initialState, action) {
  switch (action.type) {
    case START:
      return { userName: null, token: null, error: null };

    case SUCCESS:
      return { ...state, userName: action.userName, token: action.token };

    case LOGOUT:
      return { userName: null, token: null, error: null };

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
export const logOut = () => ({ type: LOGOUT });
export const loginFail = (error) => ({ type: FAIL, error });

// saga
const LOGIN_SAGA = namespace + '/LOGIN_SAGA';
const LOGOUT_SAGA = namespace + '/LOGOUT_SAGA';
const KAKAO_LOGIN_SAGA = namespace + '/KAKAO_LOGIN_SAGA';

export const loginSagaStart = (userId, userPW) => ({
  type: LOGIN_SAGA,
  payload: { userId, userPW },
});

export const logoutSagaStart = () => ({
  type: LOGOUT_SAGA,
});

export const kakaoLoginSagaStart = () => ({
  type: KAKAO_LOGIN_SAGA,
});

// login
export function* loginSaga(action) {
  try {
    yield put(loginStart());
    const { userId, userPW } = action.payload;

    const response = yield call(AuthService.login, userId, userPW);
    yield delay(500);

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

const { Kakao } = window;
// kakao login saga
export function* loginKakaoSaga(action) {
  try {
    yield put(loginStart());

    yield Kakao.Auth.login({
      scope: 'profile_nickname, account_email, gender',
      success: yield (authObj) => {
        console.log(authObj);
        Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            const nickname = res.kakao_account.profile.nickname;
            const token = authObj.access_token;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', nickname);
            put(loginSuccess(token, nickname));
          },
        });
      },
      fail: (err) => {
        console.log(err);
      },
    });

    yield put(closeLogin());
  } catch (err) {
    yield put(loginFail(err));
  }
}

// logout
export function* logoutSaga(action) {
  try {
    yield call(AuthService.logout);
    yield delay(500);

    localStorage.clear();

    yield put(logOut());
  } catch (error) {
    yield put(loginFail(error));
  }
}

// watch saga
export function* watchLogin() {
  yield takeEvery(LOGIN_SAGA, loginSaga);
  yield takeEvery(LOGOUT_SAGA, logoutSaga);
  yield takeEvery(KAKAO_LOGIN_SAGA, loginKakaoSaga);
}
