import actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  payload: []
}

const accounts = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.GET_ACCOUNTS:
      return {
        ...state, 
        isFetching: true 
      };
    case actionTypes.GET_ACCOUNTS_SUCCESS:
      return {
        ...state, 
        isFetching: false, 
        payload: action.accounts 
      };
    case actionTypes.error:
      return {
        ...state, 
        error: action.error 
      }
    default:
      return state;
  }
}

export default accounts;