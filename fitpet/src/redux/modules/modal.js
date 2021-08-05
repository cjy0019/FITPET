// modal 창 상태관리 redux

// namespace
const namespace = 'fitpet/modal/';

// action types
const OPEN_LOGIN = namespace + 'OPEN_LOGIN';
const CLOSE_LOGIN = namespace + 'CLOSE_LOGIN';

const OPEN_SIGNUP = namespace + 'OPEN_SIGNUP';
const CLOSE_SIGNUP = namespace + 'CLOSE_SIGNUP';

// action creators
export const openLogin = () => ({ type: OPEN_LOGIN });
export const closeLogin = () => ({ type: CLOSE_LOGIN });

export const openSignUp = () => ({ type: OPEN_SIGNUP });
export const closeSignUp = () => ({ type: CLOSE_SIGNUP });

// initial state
const initialState = { loginOpen: false, signupOpen: false };

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

    default:
      return state;
  }
}
