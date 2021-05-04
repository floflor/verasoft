import { BaseAction, actionIds } from '../common';

export type orderState = {
  info: {
    orders_A?: [],
    orders_AA?: [],
    orders_AAA: {
      sent: [
        {
          id: number,
          order_id: number,
          sent_dt: string,
          sent_tm: string,
          subject: {
            title: string,
            email: string,
          },
          type: string
        },
      ]
    },
    orders_B?: [],
    orders_C?: []

  },
  error: {}
};

export const getOrdersReducer = (
  state: orderState = {
    info: {
      orders_AAA:{
        sent:[{
          id: 0,
          order_id: 0,
          sent_dt: '',
          sent_tm: '',
          subject: {
            title: '',
            email: '',
          },
          type: ''
        },]
      }
    },
    error: {}
  },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_ORDERS_COMPLETED:
      return {
        ...state,
        info: action.payload
      }
    case actionIds.GET_ORDERS_FAILED:
      return {
        ...state,
        error: action.payload
      }
  }
  return state;
};