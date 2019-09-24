import * as actionTypes from './actionTypes';

export const loadPost_Start = () => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_START
  }
}

export const createClub_Start = () => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_START
  }
}

export const createClub_Success = (posts) => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_SUCCESS,
    posts: posts
  }
}

export const loadPost_Success = (posts) => {
  return {
    type: actionTypes.LOAD_CLUB_POSTS_SUCCESS,
    posts: posts
  }
}

export const loadPost_False = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  }
};

export const createClub_False = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error
  }
};


export const loadClubPosts = (clubID, token) => {
  return dispatch => {
    dispatch(loadPost_Start());

    fetch(`https://api.paych.sergo.if.ua/channels/${clubID}/posts`, {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error('load posts error');
      })
      .then(response => {
        console.log(response)
        dispatch(loadPost_Success(response))
      } )
      .catch(error => {

        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        }

        dispatch(loadPost_False(newError))
      });
  };
}

export const createClub = (data, file, token) => {
  return dispatch => {
    dispatch(loadPost_Start());

    const newClub = {
      ...data,
      clubImg: file
    }

    fetch(`https://api.paych.sergo.if.ua/channels/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: newClub
      })
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error('club created error');
      })
      .then(response => {
        dispatch(loadPost_Success(response))
        console.log(response)
      })
      .catch(error => {

        let newError = {
          id: new Date().getTime(),
          error: error.toString()
        }

        dispatch(loadPost_False(newError))
      });
  };
}