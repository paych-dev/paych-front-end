import * as actionTypes from '../actions/actionTypes'

const initialState = { posts: '' };

export function posts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state
  }
}