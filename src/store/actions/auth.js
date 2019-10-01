import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

export const auth = user_data => {
  return dispatch => {
    dispatch(auth_start());

    axios
      .post('/auth/login', user_data)
      .then(response => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('userToken', token);
        dispatch(auth_success(user));
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(auth_failed(newError))
      })
  };
};

const auth_start = () => {
  return {
    type: actionTypes.USER_LOGIN_START
  };
};

const auth_success = (authData) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    usedData: authData
  };
};

const auth_failed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  };
};

export const register = user_data => {
  return dispatch => {
    dispatch(auth_start());

    axios
      .post('/auth/register', user_data)
      .then(response => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('userToken', token);
        dispatch(auth_success(user));
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(auth_failed(newError))
      })
  };
};