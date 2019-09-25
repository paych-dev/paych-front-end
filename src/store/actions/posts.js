import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

const fetch_channel_start = () => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_START
  };
};

const fetch_channel_success = (posts) => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_SUCCESS,
    posts: posts
  };
};

const fetch_channel_failed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  };
};

export const fetch_channel_posts = (id) => {
  return dispatch => {
    dispatch(fetch_channel_start());

    axios
      .post(`/channels/${id}/posts`)
      .then(response => {
        console.log(response)
        dispatch(fetch_channel_success(response))
      })
      .catch(error => {
        const newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(fetch_channel_failed(newError))
      });
  };
};