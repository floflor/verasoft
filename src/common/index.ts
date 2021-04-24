export const actionIds = {
    GET_USER_INFO_START:
      '[0] Request user info to the server.',
    GET_USER_INFO_COMPLETED:
      '[1] Server returned user info.',
  };
  
  export interface BaseAction {
    type: string;
    payload?: any;
  }