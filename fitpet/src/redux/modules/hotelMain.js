import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import HotelService from '../../api/services/HotelService';

// namespace
const namespace = 'fitpet/hotel';

// action types
const START = namespace + '/START';
const HITSLIST_SUCCESS = namespace + '/HITSLIST_SUCCESS';
const REGION_SUCCESS = namespace + '/REGION_SUCCESS';
const FAIL = namespace + '/FAIL';

// initial state
const initialState = {
  regions: [],
  hitsList: [],
  isLoading: false,
  error: null,
};

// reducer
export default function hotelMain(state = initialState, action) {
  switch (action.type) {
    case START:
      return { regions: [], hitsList: [], isLoading: true, error: null };

    case HITSLIST_SUCCESS:
      return { ...state, hitsList: action.hitsList, isLoading: false };

    case REGION_SUCCESS:
      return { ...state, regions: action.regions, isLoading: false };

    case FAIL:
      return { ...state, error: action.error, isLoading: false };

    default:
      return state;
  }
}

// action creators
export const hotelMainStart = () => ({ type: START });
export const hitsListSuccess = (hitsList) => ({
  type: HITSLIST_SUCCESS,
  hitsList,
});
export const regionsSuccess = (regions) => ({
  type: REGION_SUCCESS,
  regions,
});

export const hotelMainFail = (error) => ({ type: FAIL, error });

// saga
const HOTEL_MAIN_SAGA = namespace + '/HOTEL_MAIN_SAGA';

export const hotelMainSagaStart = (region) => ({
  type: HOTEL_MAIN_SAGA,
  region,
});

// hotelMain
export function* hotelMainSaga(action) {
  try {
    yield put(hotelMainStart());
    yield delay(900);
    const hitsList = yield call(HotelService.getHotelMainHitsList);
    const regions = yield call(HotelService.getHotelMainRegion, action.region);
    yield put(hitsListSuccess(hitsList.data));
    yield put(regionsSuccess(regions.data));
  } catch (error) {
    yield put(hotelMainFail(error));
  }
}

// watch saga
export function* watchHotelMain() {
  yield takeEvery(HOTEL_MAIN_SAGA, hotelMainSaga);
}
