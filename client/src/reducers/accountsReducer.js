import actionTypes from '../constants/actionTypes';

const accountsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ACCOUNTS:
      console.log('accountsReducer->GET_ACCOUNTS');
      return {
        ...state, 
        isFetching: true 
      };
    case actionTypes.GET_ACCOUNTS_SUCCESS:
      console.log('accountsReducer->GET_ACCOUNTS_SUCCESS');
      return {
        ...state, 
        isFetching: false, 
        accounts: action.accounts 
      };
    case actionTypes.error:
      console.log('accountsReducer->ERROR');
      return {
        ...state, 
        error: action.error 
      }
    default:
      return state;
  }
}

export default accountsReducer;