import { call, put, takeEvery } from '@redux-saga/core/effects';
import HotelService from '../../services/HotelService';

// namespace
const namespace = 'fitpet/hotel';

// action types
const START = namespace + '/START';
const HITSLIST_SUCCESS = namespace + '/HITSLIST_SUCCESS';
const REGION_SUCCESS = namespace + '/REGION_SUCCESS';
const FAIL = namespace + '/FAIL';

// initial state
const initialState = { regions: [], hitsList: [], error: null };

// reducer
export default function hotelMain(state = initialState, action) {
  switch (action.type) {
    case START:
      return { regions: [], hitsList: [], error: null };

    case HITSLIST_SUCCESS:
      return { ...state, hitsList: action.hitsList };

    case REGION_SUCCESS:
      return { ...state, regions: action.regions };

    case FAIL:
      return { ...state, error: action.error };

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
    const hitsList = yield call(HotelService.getHotelMainHitsList);
    const regions = yield call(HotelService.getHotelMainRegion, action.region);
    console.log(regions);
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
