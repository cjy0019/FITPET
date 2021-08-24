// namespace
const namespace = 'fitpet/markers';

// action types
const ADD = namespace + '/ADD';
const DELETE = namespace + '/DELETE';

// initialState
const initialState = { locations: [] };

// reducer
let id = 0;

export default function markers(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        locations: [
          ...state.locations,
          { lat: action.lat, lng: action.lng, id: ++id },
        ],
      };
    case DELETE:
      console.log(action.id, 'action.id');
      return {
        ...state,
        locations: state.locations.filter(
          (location) => +location.id !== +action.id,
        ),
      };
    default:
      return state;
  }
}

// action creators
export const markerAdd = (lat, lng) => ({ type: ADD, lat, lng });
export const markerDelete = (id) => ({ type: DELETE, id });
