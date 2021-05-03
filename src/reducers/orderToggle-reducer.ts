import { BaseAction, actionIds } from '../common';

export type btnState = {
  orderToggle: string
  sentOrErrors: string
  newOrder: boolean
};

export const setBtnOrderReducer = (
  state: btnState = {
    orderToggle: 'ordersAAA',
    sentOrErrors: 'sent',
    newOrder: false
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
    case actionIds.SHOW_MODAL:
      return {
        ...state,
        newOrder: action.payload
      }
  }
  return state;
};