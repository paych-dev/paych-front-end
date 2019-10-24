import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

export const fetch_channels = () =>
  dispatch => {
    dispatch(fetch_channels_start);

    axios
      .get(`/subscribed-channels/`)
      .then(response => {
        dispatch(fetch_subscribed_channels_success(response.data))
      })
      .catch(error => {
        console.log(error);
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        };
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
        };
        dispatch(fetch_failed(newError))
      });
  };

const fetch_channels_start = () => ({type: actionTypes.FETCH_CHANNELS_POSTS_START});
const fetch_own_channels_success = channels => ({type: actionTypes.FETCH_OWN_CHANNELS_SUCCESS, payload: channels});
const fetch_subscribed_channels_success = channels => ({type: actionTypes.FETCH_SUBSCRIBED_CHANNELS_SUCCESS, payload: channels});
const fetch_failed = error => ({type: actionTypes.FETCH_FAILED, payload: error});

export const createChannel = channelInfo =>
  dispatch => {
    axios
      .post('/channels' , channelInfo)
      .then( resp => console.log(resp))
      .catch( err => {
        dispatch(fetch_failed(err))
      })
  };