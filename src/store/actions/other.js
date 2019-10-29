import * as actionTypes from '../actionsTypes'

export const deleteError = (index) => {
  return{
    type: actionTypes.CLEAR_ERROR_STACK,
    index: index
  }
}