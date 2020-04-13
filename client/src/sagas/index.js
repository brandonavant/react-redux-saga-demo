import { takeEvery, call, all, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import actionTypes from '../constants/actionTypes';

export function* getAccounts() {
  const accounts = [
    {
      id: 1,
      name: 'Brandon Avant',
    },
  ];
  // const accounts = yield call(API.getAccounts); TODO: Create API Service, which utilizes Axios to make calls out to the API.
  if (accounts) {
    yield put(actions.getAccountsSuccess(accounts));
  } else {
    yield put(
      actions.getAccountsError(new Error('Failed to retrieve Accounts'))
    );
  }
}

export function* watchGetAccounts() {
  yield takeEvery(actionTypes.GET_ACCOUNTS, getAccounts);
}

export default function* rootSaga() {
  yield all([fork(getAccounts)]);
}
