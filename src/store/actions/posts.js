import * as actionTypes from './actionTypes';

export const addPost = post => {
  return {
    type: actionTypes.ADD_POST,
    newPost: post
  }
}