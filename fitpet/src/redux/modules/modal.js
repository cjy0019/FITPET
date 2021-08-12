// modal 창 상태관리 redux

// namespace
const namespace = 'fitpet/modal/';

// action types
const OPEN_LOGIN = namespace + 'OPEN_LOGIN';
const CLOSE_LOGIN = namespace + 'CLOSE_LOGIN';

const OPEN_SIGNUP = namespace + 'OPEN_SIGNUP';
const CLOSE_SIGNUP = namespace + 'CLOSE_SIGNUP';

const SIGNUP_SUCCESS_OPEN = namespace + 'SIGNUP_SUCCESS_OPEN';
const SIGNUP_SUCCESS_CLOSE = namespace + 'SIGNUP_SUCCESS_CLOSE';

// action creators
export const openLogin = () => ({ type: OPEN_LOGIN });
export const closeLogin = () => ({ type: CLOSE_LOGIN });

export const openSignUp = () => ({ type: OPEN_SIGNUP });
export const closeSignUp = () => ({ type: CLOSE_SIGNUP });

export const signupSuccessOpen = () => ({ type: SIGNUP_SUCCESS_OPEN });
export const signupSuccessClose = () => ({ type: SIGNUP_SUCCESS_CLOSE });

// initial state
const initialState = {
  loginOpen: false,
  signupOpen: false,
  signupSuccessOpen: false,
};

// reudcer
export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...state, loginOpen: true };
    case CLOSE_LOGIN:
      return { ...state, loginOpen: false };

    case OPEN_SIGNUP:
      return { ...state, signupOpen: true };

    case CLOSE_SIGNUP:
      return { ...state, signupOpen: false };

    case SIGNUP_SUCCESS_OPEN:
      return { ...state, signupSuccessOpen: true };

    case SIGNUP_SUCCESS_CLOSE:
      return { ...state, signupSuccessOpen: false };

    default:
      return state;
  }
}
