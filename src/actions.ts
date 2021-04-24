import { BaseAction, actionIds } from './common';

export const getUserInfoStartAction = (): BaseAction => ({
  type: actionIds.GET_USER_INFO_START,
  payload: null,
});

export const getUserInfoCompletedAction = (): BaseAction => ({
  type: actionIds.GET_USER_INFO_COMPLETED,
});