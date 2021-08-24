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
  isLoginOpen: false,
  isLoginFailOpen: false,
  isSignupOpen: false,
  isSignupSuccessOpen: false,
  roomDetailOpen: false,
};

// reudcer
export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...state, isLoginOpen: true };
    case CLOSE_LOGIN:
      return { ...state, isLoginOpen: false };

    case OPEN_LOGIN_FAIL:
      return { ...state, isLoginFailOpen: true };

    case CLOSE_LOGIN_FAIL:
      return { ...state, isLoginFailOpen: false };

    case OPEN_SIGNUP:
      return { ...state, isSignupOpen: true };

    case CLOSE_SIGNUP:
      return { ...state, isSignupOpen: false };

    case SIGNUP_SUCCESS_OPEN:
      return { ...state, isSignupSuccessOpen: true };

    case SIGNUP_SUCCESS_CLOSE:
      return { ...state, isSignupSuccessOpen: false };

    case OPEN_ROOMDETAIL:
      return { ...state, roomDetailOpen: true };

    case CLOSE_ROOMDETAIL:
      return { ...state, roomDetailOpen: false };
    default:
      return state;
  }
}
