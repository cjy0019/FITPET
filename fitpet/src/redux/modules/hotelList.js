import { call, put, takeEvery } from '@redux-saga/core/effects';
import { delay } from 'redux-saga/effects';
import HotelService from '../../services/HotelService';

// namespace
const namespace = 'fitpet/hotelList';

// action types
const START = namespace + '/START';
const SUCCESS = namespace + '/SUCCESS';
const FAIL = namespace + '/FAIL';

// initial state
const initialState = { hotels: [], isLoading: false, error: null };

// reducer
export default function hotelList(state = initialState, action) {
  switch (action.type) {
    case START:
      return { hotels: [], isLoading: true, error: null };

    case SUCCESS:
      return { ...state, hotels: action.hotels, isLoading: false };

    case FAIL:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

// action creators
export const hotelListStart = () => ({ type: START });
export const hotelListSuccess = (hotels) => ({
  type: SUCCESS,
  hotels,
});

export const hotelListFail = (error) => ({ type: FAIL, error });

// saga
const HOTEL_LIST_SAGA = namespace + '/HOTEL_LIST_SAGA';

export const hotelListSagaStart = (page) => ({
  type: HOTEL_LIST_SAGA,
  page,
});

// hotelList
export function* hotelListSaga(action) {
  try {
    yield put(hotelListStart());
    yield delay(1900);
    const response = yield call(HotelService.getHotelList, action.page);
    yield put(hotelListSuccess(response.data));
  } catch (error) {
    yield put(hotelListFail(error));
  }
}

// watch saga
export function* watchHotelList() {
  yield takeEvery(HOTEL_LIST_SAGA, hotelListSaga);
}
