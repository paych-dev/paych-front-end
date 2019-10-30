import * as actionTypes from '../actionsTypes'

const initialState = {
  own_loaded: false,
  subscribed_loaded: false,
  loading: false,
  own: {
    data: '',
    links: ''
  },
  subscribed: false
};

export function channels(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.FETCH_OWN_CHANNELS_SUCCESS:
      return {
        ...state,
        own: {
            data: [...action.data],
            links: {
              ...action.links
            }
          },
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