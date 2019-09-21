import * as actionTypes from './actionTypes';

export const deleteError = (index) => {
  return{
    type: actionTypes.CLEAR_ERROR_STACK,
    index: index
  }
}