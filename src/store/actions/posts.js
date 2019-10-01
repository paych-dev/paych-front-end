import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

const fetch_channel_posts_start = () => {
  return {
    type: actionTypes.LOAD_CHANNELS_POSTS_START
  };
};

const fetch_channel_posts_success = (posts) => {
  return {
    type: actionTypes.LOAD_CHANNELS_POSTS_SUCCESS,
    posts: posts
  };
};

const fetch_channel_posts_failed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  };
};

export const fetch_channel_posts = (id) => {
  return dispatch => {
    dispatch(fetch_channel_posts_start());

    axios
      .get(`/channels/${id}/posts`)
      .then(response => {
        console.log(response)
        dispatch(fetch_channel_posts_success(response))
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