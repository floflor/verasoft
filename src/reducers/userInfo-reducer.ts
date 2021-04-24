import { BaseAction, actionIds } from '../common';

export type initialState = Object;

export const getInfoReducer = (
  state: initialState = {},
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_USER_INFO_COMPLETED:
      return {
          ...state, 
          state: action.payload
      };
  }
  return state;
};