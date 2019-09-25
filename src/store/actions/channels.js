import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

const fetch_channels_start = () => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_START
  };
};

const fetch_channels_success = (channels) => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_SUCCESS,
    payload: channels
  };
};

const fetch_channels_failed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  };
};

export const fetch_channels = () => {
  return dispatch => {
    dispatch(fetch_channels_start());
    axios
      .get(`/subscribed-channels/`)
      .then(response => {
        console.log('subscribed', response.data.data)
        dispatch(fetch_channels_success(response.data))
      })
      .catch(error => {
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(fetch_channels_failed(newError))
      });
    axios
      .get(`/own-channels/`)
      .then(response => {
        console.log('own', response.data.data)
        dispatch(fetch_channels_success(response.data))
      })
      .catch(error => {
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(fetch_channels_failed(newError))
      });
  };
};