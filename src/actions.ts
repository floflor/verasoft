import { BaseAction, actionIds } from './common';

export const getUserInfoStartAction = (): BaseAction => ({
  type: actionIds.GET_USER_INFO_START,
  payload: null,
});

export const getUserInfoCompletedAction = (response : object): BaseAction => ({
  type: actionIds.GET_USER_INFO_COMPLETED,
  payload: response
});

export const requestFailedAction = (response : object) : BaseAction =>({
  type: actionIds.REQUEST_FAILED,
  payload: response
})