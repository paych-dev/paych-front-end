import * as actionTypes from './actionTypes';
import axios from '../../axios-setting';

export const fetch_feed = () =>
  dispatch => 
    axios.get('/feed')
      .then(response => {
        console.log(response)
        dispatch(fetch_feed_success(response.data.data))
      })
      .catch(error => console.log(error))

const fetch_feed_success = (feed) => ({type: actionTypes.FETCH_FEED_SUCCESS, payload: feed})