import * as actionTypes from '../actionsTypes'

const initialState = {
  errorList: ''
};

export function error(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        errorList: [...state.errorList, action.error]
      };

    case actionTypes.CLEAR_ERROR_STACK:
      const updatedArray = state.errorList.filter(error => error.id !== action.index);
      return {
        ...state,
        errorList: updatedArray
      };

    default:
      return state
  }
}