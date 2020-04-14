import { takeEvery, call, all, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import actionTypes from '../constants/actionTypes';
import axios from 'axios';

function apiCall() {
  return axios
    .get('http://localhost:3001/api/accounts')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response.data;
    });
}

export function* getAccounts() {
  const response = yield call(apiCall);

  if (response.data) {
    yield put(actions.getAccountsSuccess(response.data));
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
