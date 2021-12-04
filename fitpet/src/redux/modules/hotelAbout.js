import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import HotelService from '../../api/services/HotelService';

// namespace
const namespace = 'fitpet/hotelAbout';

//action types
const START = namespace + '/START';
const SUCCESS = namespace + '/SUCCESS';
const FAIL = namespace + '/FAIL';

// inital state
const initialState = { options: [], isLoading: false, error: null };

// reducer
export default function hotelAbout(state = initialState, action) {
  switch (action.type) {
    case START:
      return { options: [], isLoading: true, error: null };

    case SUCCESS:
      return { ...state, options: action.options, isLoading: false };

    case FAIL:
      return { ...state, error: action.error, isLoading: false };

    default:
      return state;
  }
}

// action creators
export const hotelAboutStart = () => ({ type: START });

export const hotelAboutSuccess = (options) => ({
  type: SUCCESS,
  options,
});

export const hotelAboutFail = (error) => ({ type: FAIL, error });

// saga
const HOTEL_ABOUT_SAGA = namespace + '/HOTEL_ABOUT_SAGA';

export const hotelAboutSagaStart = (hotelId) => ({
  type: HOTEL_ABOUT_SAGA,
  hotelId,
});

// hotelAbout
export function* hotelAboutSaga(action) {
  try {
    yield put(hotelAboutStart());
    yield delay(500);
    const response = yield call(HotelService.getHotelAbout, action.hotelId);
    yield put(hotelAboutSuccess(response.data));
  } catch (error) {
    yield put(hotelAboutFail(error));
  }
}

// watch saga
export function* watchHotelAbout() {
  yield takeEvery(HOTEL_ABOUT_SAGA, hotelAboutSaga);
}
