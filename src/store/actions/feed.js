import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

export const fetch_feed = () =>
  dispatch =>
    axios.get('/feed')
      .then(response => {
        dispatch(fetch_feed_success(response.data.data))
      })
      .catch(error => {
        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        }
        dispatch(feth_failed(newError))
      })

const fetch_feed_success = feed => ({type: actionTypes.FETCH_FEED_SUCCESS, payload: feed});
const feth_failed = error => ({type: actionTypes.FETCH_FAILED, payload: error})