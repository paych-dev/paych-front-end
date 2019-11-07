import * as actionTypes from '../actionsTypes'

let accessToken = localStorage.getItem('accessToken');
let userId = localStorage.getItem('userId');

const initialState = accessToken
  ? { loggedIn: true, accessToken, userId, loggingIn: false}
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
        loggingIn: false
      };

    default:
      return state
  }
}