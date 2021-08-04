// modal 창 상태관리 redux

// namespace
const namespace = 'fitpet/modal/';

// action types
const OPEN_LOGIN = namespace + 'OPEN_LOGIN';
const CLOSE_LOGIN = namespace + 'CLOSE_LOGIN';

// action creators
export const openLogin = () => ({ type: OPEN_LOGIN });
export const closeLogin = () => ({ type: CLOSE_LOGIN });

// initial state
const initialState = { loginOpen: false };

// reudcer
export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { loginOpen: true };
    case CLOSE_LOGIN:
      return { loginOpen: false };

    default:
      return state;
  }
}
