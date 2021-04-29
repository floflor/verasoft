import { combineReducers } from 'redux';
import {
  getInfoReducer,
  initialState,
} from './userInfo-reducer';
import{
  setBtnOrderReducer,
  btnState,
} from './orderToggle-reducer';
import{
  getOrdersReducer,
  orderState,
} from './orders-reducer';


export interface State {
  userInfo: initialState,
  btnOrder: btnState
  orderState: orderState
}

export const rootReducers = combineReducers<State>({
  userInfo: getInfoReducer,
  btnOrder: setBtnOrderReducer,
  orderState: getOrdersReducer,
});