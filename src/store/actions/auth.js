import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

const REDIRECT_URI = 'http://lvh.me:3000/login';

export const googleAuth_Start = () =>
  dispatch => {
    dispatch(auth_start());
    axios
      .get(`/auth/google/?redirect_uri=${REDIRECT_URI}`)
      .then(resp => {
        window.location = resp.data.url
      })
      .catch(err => console.log(err))
  }

export const onGoogleAuth = (params) =>
  dispatch => {
    axios
      .get(`/auth/google/callback${params}&redirect_uri=${REDIRECT_URI}`)
      .then(resp => {
        const token = resp.data.accessToken;
        const user = resp.data.user;
        localStorage.setItem('accessToken', token);
        dispatch(auth_success(user));
      })
      .catch(err => dispatch(auth_failed(err)))
  }


export const auth = user_data =>
  dispatch => {
    axios
      .post('/auth/login', user_data)
      .then(response => {
        const token = response.data.accessToken;
        const user = response.data.user;
        localStorage.setItem('accessToken', token);
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
        const token = response.data.accessTokem;
        const user = response.data.user;
        localStorage.setItem('accessToken', token);
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