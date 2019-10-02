import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

export const fetch_channels = () =>
  dispatch => {
    axios
      .get(`/subscribed-channels/`)
      .then(response => {
        dispatch(fetch_subscribed_channels_success(response.data))
      })
      .catch(error => {
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(fetch_failed(newError))
      });

    axios
      .get(`/own-channels/`)
      .then(response => {
        dispatch(fetch_own_channels_success(response.data))
      })
      .catch(error => {
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(fetch_failed(newError))
      });
  };

const fetch_own_channels_success = channels => ({type: actionTypes.FETCH_OWN_CHANNELS_SUCCESS, payload: channels});
const fetch_subscribed_channels_success = channels => ({type: actionTypes.FETCH_SUBSCRIBED_CHANNELS_SUCCESS, payload: channels});
const fetch_failed = error => ({type: actionTypes.FETCH_FAILED, payload: error});