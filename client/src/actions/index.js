import actionTypes from '../constants/actionTypes';

export function getAccounts() {
  return { type: actionTypes.GET_ACCOUNTS };
}

export function getAccountsSuccess(accounts) {
  return { 
    type: actionTypes.GET_ACCOUNTS_SUCCESS, 
    accounts
  };
}

export function getAccountsError(error) {
  return { 
    type: actionTypes.ERROR, 
    error 
  };
}