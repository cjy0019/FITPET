import RentcarService from '../../services/RentcarService';
import { sleep } from '../../utils';

// namespace
const namespace = 'fitpet/rentcar';

// action types
const START = namespace + '/START';
const SUCCESS = namespace + '/SUCCESS';
const FAIL = namespace + '/FAIL';

// initial state
const initialState = { cars: [], isLoading: false, error: null };

// reducer
export default function rentcar(state = initialState, action) {
  switch (action.type) {
    case START:
      return { cars: [], isLoading: true, error: null };

    case SUCCESS:
      return { ...state, cars: action.cars, isLoading: false };

    case FAIL:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

// action creators
export const rentcarListStart = () => ({ type: START });
export const retncarListSuccess = (cars) => ({
  type: SUCCESS,
  cars,
});

export const rentcarListFail = (error) => ({ type: FAIL, error });

// Thunk
export const getRentcarList = () => async (dispatch, getState) => {
  try {
    dispatch(rentcarListStart());

    await sleep(1700);

    const cars = await RentcarService.getCars();
    dispatch(retncarListSuccess(cars.data));
  } catch (err) {
    dispatch(rentcarListFail(err));
  }
};
