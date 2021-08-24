import { call, put, takeEvery } from '@redux-saga/core/effects';
import HotelService from '../../services/HotelService';

// namespace
const namespace = 'fitpet/hotel';

// action types
const START = namespace + '/START';
const SUCCESS = namespace + '/SUCCESS';
const FAIL = namespace + '/FAIL';

// initial state
const initialState = { hitsList: [], error: null };

// reducer
export default function hotelMain(state = initialState, action) {
  switch (action.type) {
    case START:
      return { hitsList: [], error: null };

    case SUCCESS:
      return { ...state, hitsList: action.hitsList };

    case FAIL:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

// action creators
export const hotelMainStart = () => ({ type: START });
export const hotelMainSuccess = (hitsList) => ({
  type: SUCCESS,
  hitsList,
});

export const hotelMainFail = (error) => ({ type: FAIL, error });

// saga
const HOTEL_MAIN_SAGA = namespace + '/HOTEL_MAIN_SAGA';

export const hotelMainSagaStart = () => ({
  type: HOTEL_MAIN_SAGA,
});

// hotelMain
export function* hotelMainSaga(action) {
  try {
    yield put(hotelMainStart());
    const response = yield call(HotelService.getHotelMainHitsList);
    yield put(hotelMainSuccess(response.data));
  } catch (error) {
    yield put(hotelMainFail(error));
  }
}

// watch saga
export function* watchHotelMain() {
  yield takeEvery(HOTEL_MAIN_SAGA, hotelMainSaga);
}
