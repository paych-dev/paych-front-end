import * as actionTypes from '../actions/actionTypes'

let user = localStorage.getItem('accessToken');

const initialState = user 
  ? { loggedIn: true, user,loggingIn: false} 
  : { loggedIn: false, loggingIn: false };

export function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        loggingIn: false
      };

    default:
      return state
  }
}