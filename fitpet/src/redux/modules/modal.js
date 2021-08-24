// modal 창 상태관리 redux

// namespace
const namespace = 'fitpet/modal/';

// action types
const OPEN_LOGIN = namespace + 'OPEN_LOGIN';
const CLOSE_LOGIN = namespace + 'CLOSE_LOGIN';

const OPEN_LOGIN_FAIL = namespace + 'OPEN_LOGIN_FAIL';
const CLOSE_LOGIN_FAIL = namespace + 'CLOSE_LOGIN_FAIL';

const OPEN_SIGNUP = namespace + 'OPEN_SIGNUP';
const CLOSE_SIGNUP = namespace + 'CLOSE_SIGNUP';

const SIGNUP_SUCCESS_OPEN = namespace + 'SIGNUP_SUCCESS_OPEN';
const SIGNUP_SUCCESS_CLOSE = namespace + 'SIGNUP_SUCCESS_CLOSE';

const OPEN_ROOMDETAIL = namespace + 'OPEN_ROOMDETAIL';
const CLOSE_ROOMDETAIL = namespace + 'CLOSE_ROOMDETAIL';

// action creators
export const openLogin = () => ({ type: OPEN_LOGIN });
export const closeLogin = () => ({ type: CLOSE_LOGIN });

export const openLoginFail = () => ({ type: OPEN_LOGIN_FAIL });
export const closeLoginFail = () => ({ type: CLOSE_LOGIN_FAIL });

export const openSignUp = () => ({ type: OPEN_SIGNUP });
export const closeSignUp = () => ({ type: CLOSE_SIGNUP });

export const signupSuccessOpen = () => ({ type: SIGNUP_SUCCESS_OPEN });
export const signupSuccessClose = () => ({ type: SIGNUP_SUCCESS_CLOSE });

export const openRoomDetail = () => ({ type: OPEN_ROOMDETAIL });
export const closeRoomDetail = () => ({ type: CLOSE_ROOMDETAIL });

// initial state
const initialState = {
  loginOpen: false,
  isloginFailOpen: false,
  signupOpen: false,
  signupSuccessOpen: false,
  roomDetailOpen: false,
};

// reudcer
export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...state, loginOpen: true };
    case CLOSE_LOGIN:
      return { ...state, loginOpen: false };

    case OPEN_LOGIN_FAIL:
      return { ...state, isloginFailOpen: true };

    case CLOSE_LOGIN_FAIL:
      return { ...state, isloginFailOpen: false };

    case OPEN_SIGNUP:
      return { ...state, signupOpen: true };

    case CLOSE_SIGNUP:
      return { ...state, signupOpen: false };

    case SIGNUP_SUCCESS_OPEN:
      return { ...state, signupSuccessOpen: true };

    case SIGNUP_SUCCESS_CLOSE:
      return { ...state, signupSuccessOpen: false };

    case OPEN_ROOMDETAIL:
      return { ...state, roomDetailOpen: true };

    case CLOSE_ROOMDETAIL:
      return { ...state, roomDetailOpen: false };
    default:
      return state;
  }
}
