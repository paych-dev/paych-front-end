import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

const fetch_channel_posts_failed = error => ({
  type: actionTypes.FETCH_FAILED,
  error: error
});

const fetch_channel_posts_success = posts => ({
  type: actionTypes.FETCH_CHANNELS_POSTS_SUCCESS,
  payload: posts
});

export const fetch_channel_posts = id => {
  return dispatch => {
    axios
      .get(`channels/${id}/posts`)
      .then(response => {
        dispatch(fetch_channel_posts_success(response.data.data))
      })
      .catch(error => {
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(fetch_channel_posts_failed(newError))
      });
  };
};