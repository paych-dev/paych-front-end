import * as actionTypes from '../actions/actionTypes'

const initialState = {
  own_loaded: false,
  subscribed_loaded: false,
  loading: false,
  own: false,
  subscribed: false
};

export function channels(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS_START:
      return  {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_OWN_CHANNELS_SUCCESS:
      return {
        ...state,
        own: action.payload,
        own_loaded: true
      };

    case actionTypes.FETCH_SUBSCRIBED_CHANNELS_SUCCESS:
      return {
        ...state,
        subscribed: action.payload,
        subscribed_loaded: true
      };

    default:
      return state
  }
}