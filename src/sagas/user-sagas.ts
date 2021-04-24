import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserInfoCompletedAction } from '../actions';
import { actionIds } from '../common';

export function* watchGetUserInfoStart() {
  yield takeLatest(
    actionIds.GET_USER_INFO_START,
    requestUserInfo
  );
}

function* requestUserInfo() {
 
}