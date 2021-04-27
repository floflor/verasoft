import { put, takeLatest } from 'redux-saga/effects';
import { getUserInfoCompletedAction, requestFailedAction } from '../actions';
import { actionIds } from '../common';
import { AxiosResponse } from 'axios';
import Axios from "axios";


export function* watchGetUserInfoStart() {
  yield takeLatest(
    actionIds.GET_USER_INFO_START,
    requestUserInfo
  );
}

function* requestUserInfo() {
  try {
    const response: AxiosResponse = yield Axios.get('https://evoteam-verasoft.github.io/data/summary.json')
      .then((res: AxiosResponse) => {
        return res.data
      })
    yield put(getUserInfoCompletedAction(response))
  }
  catch (e) {
    yield put(requestFailedAction(e))
  }
}

