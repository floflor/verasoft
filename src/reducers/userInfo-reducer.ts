import { BaseAction, actionIds } from '../common';

export type initialState = {
  info: {
    id?: number,
    first_name?: string,
    last_name?:string,
    gender?: string,
    birth_date?: string,
    home_phone?: string,
    mobile_phone?: string,
    work_phone?: string,
    email?: string,
    activity?: {
      sms?: number,
      email?: number,
      orders?: number
    },
    carrier_status?: {
      since?: string,
      status?: string
    }
  },
  error: {}
};

export const getInfoReducer = (
  state: initialState = {
    info: {},
    error: {}
  },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_USER_INFO_COMPLETED:
      return {
        ...state,
        info: action.payload
      }
    case actionIds.REQUEST_FAILED:
      return {
        ...state,
        error: action.payload
      }
  }
  return state;
};