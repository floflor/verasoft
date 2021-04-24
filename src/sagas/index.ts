import { all, fork } from 'redux-saga/effects';
import { watchGetUserInfoStart } from './user-sagas';

export const rootSaga = function* root() {
  yield all([fork(watchGetUserInfoStart)]);
};