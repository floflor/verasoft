import { put, takeLatest } from 'redux-saga/effects';
import { getOrdersCompletedAction, getOrdersFailedAction} from '../actions';
import { actionIds } from '../common';
import { AxiosResponse } from 'axios';
import Axios from "axios";


export function* watchGetOrderStart() {
  yield takeLatest(
    actionIds.GET_ORDERS_START,
    requestOrders
  );
}

function* requestOrders() {
  try {
    const response: AxiosResponse = yield Axios.get('https://evoteam-verasoft.github.io/data/orders.json')
      .then((res: AxiosResponse) => {
        return res.data
      })
    yield put(getOrdersCompletedAction(response))
  }
  catch (e) {
    yield put(getOrdersFailedAction(e))
  }
}

