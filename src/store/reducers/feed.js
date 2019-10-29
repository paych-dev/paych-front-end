import * as actionTypes from '../actionsTypes'

const initialState = { feed: ''}

export function feed(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_FEED_SUCCESS:
      return {
        ...state,
        feed: action.payload
      };

    default:
      return state
  }
}