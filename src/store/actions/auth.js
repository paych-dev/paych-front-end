import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.USER_LOGIN_START
  }
}

export const authSuccess = (authData) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    usedData: authData
  }
}

export const authFalse = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  }
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password
    }


    fetch(`https://api.paych.sergo.if.ua/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
      })
      .then(res => {

        if (res.ok) return res.json();
        else throw new Error('wrong Email or Password');
      })
      .then(response => dispatch(authSuccess(response)))
      .catch(error => {

        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        }

        dispatch(authFalse(newError))
      })
  }
}