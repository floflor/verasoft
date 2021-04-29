export const actionIds = {
  GET_USER_INFO_START:
    '[0] Request user info to the server.',
  GET_USER_INFO_COMPLETED:
    '[1] Server returned user info.',
  REQUEST_FAILED:
    '[2] Request to server failed.',
  SET_ORDER_BTN:
    '[0] Change button active',
  SET_SENT_OR_ERRORS:
    '[0] Change sent / errors button active',
  GET_ORDERS_START:
    '[0] Request orders info to the server.',
  GET_ORDERS_COMPLETED:
    '[1] Server returned orders info.',
  GET_ORDERS_FAILED:
    '[2] Request user info to the server.',

};
export interface BaseAction {
  type: string;
  payload?: any;
}