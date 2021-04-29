import { BaseAction, actionIds } from '../common';

export type btnState = {
  orderToggle: string
  sentOrErrors: string
};

export const setBtnOrderReducer = (
  state: btnState = {
    orderToggle: 'ordersAAA',
    sentOrErrors: 'sent'
  },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.SET_ORDER_BTN:
      return {
        ...state,
        orderToggle: action.payload
      }
      case actionIds.SET_SENT_OR_ERRORS:
        return {
          ...state,
          sentOrErrors: action.payload
        }
    
  }
  return state;
};