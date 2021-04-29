import { BaseAction, actionIds } from './common';

export const getUserInfoStartAction = (): BaseAction => ({
  type: actionIds.GET_USER_INFO_START,
  payload: null,
});

export const getUserInfoCompletedAction = (response: object): BaseAction => ({
  type: actionIds.GET_USER_INFO_COMPLETED,
  payload: response
});

export const requestFailedAction = (response: object): BaseAction => ({
  type: actionIds.REQUEST_FAILED,
  payload: response
})

export const changeBtnToggle = (condition: string): BaseAction => ({
  type: actionIds.SET_ORDER_BTN,
  payload: condition
})

export const changeSentOrErrorsBtn = (condition: string): BaseAction => ({
  type: actionIds.SET_SENT_OR_ERRORS,
  payload: condition
})

export const getOrdersStartAction = (): BaseAction => ({
  type: actionIds.GET_ORDERS_START,
  payload: null
})

export const getOrdersCompletedAction = (response: object): BaseAction => ({
  type: actionIds.GET_ORDERS_COMPLETED,
  payload: response
})

export const getOrdersFailedAction = (response: object) : BaseAction =>({
  type: actionIds.GET_ORDERS_FAILED,
  payload: response
})