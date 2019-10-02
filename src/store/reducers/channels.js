import * as actionTypes from '../actions/actionTypes'

const initialState = {
  own: false,
  subscribed: false
};

export function channels(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_OWN_CHANNELS_SUCCESS:
      return {
        ...state,
        own: action.payload,
      };

    case actionTypes.FETCH_SUBSCRIBED_CHANNELS_SUCCESS:
      return {
        ...state,
        subscribed: action.payload
      };

    default:
      return state
  }
}