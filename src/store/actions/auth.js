import * as actionTypes from '../actionsTypes'
import axios from '../../axios-setting';

// const REDIRECT_URI = 'http://lvh.me:3000/login';
const REDIRECT_URI = 'https://paych-b5f22.firebaseapp.com/login';

export const googleAuth_Start = () =>
  dispatch => {
    dispatch(auth_start());
    axios
      .get(`/auth/google/?redirect_uri=${window.location}`)
      .then(resp => {
        window.location = resp.data.url
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        };
        dispatch(auth_failed(newError))
      })
  };

export const onGoogleAuth = (params) =>
  dispatch => {
    axios
      .get(`/auth/google/callback${params}&redirect_uri=${REDIRECT_URI}`)
      .then(resp => {
        const token = resp.data.accessToken;
        const user = resp.data.user;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', user.id);
        dispatch(auth_success(user));
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        };
        dispatch(auth_failed(newError))
      })
  };


export const auth = user_data =>
  dispatch => {
    axios
      .post('/auth/login', user_data)
      .then(response => {
        const token = response.data.accessToken;
        const user = response.data.user;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', user.id);
        dispatch(auth_success(user));
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        };
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
    payload: authData
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
        const token = response.data.accessToken;
        const user = response.data.user;
        localStorage.setItem('accessToken', token);
        dispatch(auth_success(user));
        window.location = '/';
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        };
        dispatch(auth_failed(newError))
      })
  };
};