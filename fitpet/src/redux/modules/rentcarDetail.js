import { call, put, takeLatest } from '@redux-saga/core/effects';
import RentcarDetailService from '../../services/RentcarDetailService';

const namespace = 'fitpet/rencarDetail';

const GET_RENTCAR_DETAIL_INFO_START = namespace + 'GET_RENTCAR_DETAIL_INFO';
const GET_RENTCAR_DETAIL_INFO_SUCCESS =
  namespace + 'GET_RENTCAR_DETAIL_INFO_SUCCESS';
const GET_RENTCAR_DETAIL_INFO_FAIL = namespace + 'GET_RENTCAR_DETAIL_INFO_FAIL';

export const getRentcarDetailInfoStart = (params) => ({
  type: GET_RENTCAR_DETAIL_INFO_START,
  params,
});
const getRentcarDetailInfoSuccess = (carDetailInfo) => ({
  type: GET_RENTCAR_DETAIL_INFO_SUCCESS,
  carDetailInfo,
});
const getRentcarDetailInfoFail = (error) => ({
  type: GET_RENTCAR_DETAIL_INFO_FAIL,
  error,
});

const initialState = {
  rentcarDetail: {},
  error: '',
};

export default function rentcarDetail(state = initialState, action) {
  switch (action.type) {
    case GET_RENTCAR_DETAIL_INFO_SUCCESS:
      return { rentcarDetail: action.carDetailInfo };

    case GET_RENTCAR_DETAIL_INFO_FAIL:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

function* getRentcarListInfoSaga(action) {
  try {
    const response = yield call(RentcarDetailService.getDetails, action.params);
    yield put(getRentcarDetailInfoSuccess(response.data));
  } catch (err) {
    yield put(getRentcarDetailInfoFail(err));
  }
}

export function* watchGetRentcarListInfo() {
  yield takeLatest(GET_RENTCAR_DETAIL_INFO_START, getRentcarListInfoSaga);
}
