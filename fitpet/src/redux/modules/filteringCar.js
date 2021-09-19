import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import FilteringCarService from '../../services/FilteringCarService';

// namespace
const namespace = 'fitpet/filteringCar';

// action types
const START = namespace + '/START';
const NEW_CAR = namespace + '/NEW_CAR';
const OPEN_CAR = namespace + '/OPEN_CAR';
const ELECTRONIC = namespace + '/ELECTRONIC';
const FOREIGN = namespace + '/FOREIGN';
const SUV = namespace + '/SUV';
const SMALLCAR = namespace + '/SMALLCAR';
const MIDDLECAR = namespace + '/MIDDLECAR';
const MIDDLE_BIG_CAR = namespace + '/MIDDLE_BIG_CAR';
const VEHICLE = namespace + '/VEHICLE';

const SUCCESS = namespace + '/SUCCESS';
const FAIL = namespace + '/FAIL';

// initial state
const initialState = {
  cars: {
    newcar: [],
    opencar: [],
    electronic: [],
    foreign: [],
    suv: [],
    smallcar: [],
    middlecar: [],
    middlebigcar: [],
    vehicle: [],
  },
  error: null,
};

// reducer
export default function filteringCar(state = initialState, action) {
  switch (action.type) {
    case START:
      return { cars: { ...state.cars, newcar: action.newCars }, error: null };

    case NEW_CAR:
      return { cars: { ...state.cars, newcar: action.newCars }, error: null };

    case OPEN_CAR:
      return { cars: { ...state.cars, opencar: action.openCar }, error: null };

    case ELECTRONIC:
      return {
        cars: { ...state.cars, electronic: action.electronic },
        error: null,
      };

    case FOREIGN:
      return { cars: { ...state.cars, foreign: action.foreign }, error: null };

    case SUV:
      return { cars: { ...state.cars, suv: action.suv }, error: null };

    case SMALLCAR:
      return {
        cars: { ...state.cars, smallcar: action.smallCar },
        error: null,
      };

    case MIDDLECAR:
      return {
        cars: { ...state.cars, middlecar: action.middleCar },
        error: null,
      };

    case MIDDLE_BIG_CAR:
      return {
        cars: { ...state.cars, middlebigcar: action.middleBigCar },
        error: null,
      };

    case VEHICLE:
      return {
        cars: { ...state.cars, vehicle: action.vehicle },
        error: null,
      };

    case FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

// action creators
export const fiteringCarStart = (newCars) => ({ type: START, newCars });
export const filteringNewCar = (newCars) => ({ type: NEW_CAR, newCars });
export const filteringElectronic = (electronic) => ({
  type: ELECTRONIC,
  electronic,
});
export const filteringForeign = (foreign) => ({ type: FOREIGN, foreign });
export const filteringSuv = (suv) => ({ type: SUV, suv });
export const filteringSmallCar = (smallCar) => ({ type: SMALLCAR, smallCar });
export const filteringOpenCar = (openCar) => ({ type: OPEN_CAR, openCar });
export const filteringMiddleCar = (middleCar) => ({
  type: MIDDLECAR,
  middleCar,
});
export const filteringMiddleBigCar = (middleBigCar) => ({
  type: MIDDLE_BIG_CAR,
  middleBigCar,
});
export const filteringVehicle = (vehicle) => ({ type: VEHICLE, vehicle });

export const filteringCarSuccess = (newCars) => ({
  type: SUCCESS,
  newCars,
});

export const filteringCarFail = (error) => ({ type: FAIL, error });

/// saga
const FILTERING_CAR_SAGA = namespace + '/FILTERING_CAR_SAGA';

export const filteringCarSagaStart = (kind) => ({
  type: FILTERING_CAR_SAGA,
  kind,
});
const carKind = {
  신차: 'newcar',
  오픈카: 'opencar',
  전기차: 'electronic',
  수입: 'foreign',
  SUV: 'suv',
  경소형: 'smallcar',
  준중형: 'middlecar',
  중대형: 'middlebigcar',
  승합차: 'vehicle',
};

// filtering car
export function* filteringCarSaga(action) {
  try {
    const store = yield select();
    const cars = yield call(FilteringCarService.getNewCars, action.kind);

    switch (cars.data[0].carType) {
      case '신차':
        yield put(filteringNewCar(cars.data));
        break;
      case '오픈카':
        yield put(filteringOpenCar(cars.data));
        break;
      case '전기차':
        yield put(filteringElectronic(cars.data));
        break;
      case '수입':
        yield put(filteringForeign(cars.data));
        break;
      case 'SUV':
        yield put(filteringSuv(cars.data));
        break;
      case '경소형':
        yield put(filteringSmallCar(cars.data));
        break;
      case '준중형':
        yield put(filteringMiddleCar(cars.data));
        break;
      case '중대형':
        yield put(filteringMiddleBigCar(cars.data));
        break;
      case '승합차':
        yield put(filteringVehicle(cars.data));
        break;
      default:
        yield put(fiteringCarStart(cars.data));

        break;
    }
  } catch (error) {
    yield put(filteringCarFail(error));
  }
}

// watch saga
export function* watchFilteringCar() {
  yield takeLatest(FILTERING_CAR_SAGA, filteringCarSaga);
}
