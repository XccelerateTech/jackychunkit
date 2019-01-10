export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}


export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export interface ILoginFailureAction {
  type: typeof LOGIN_FAILURE;
  message: string;
}


export const LOGOUT = 'LOGOUT';
export interface ILogOutAction {
  type: typeof LOGOUT;
}

export type LoginActions = ILoginSuccessAction | ILoginFailureAction | ILogOutAction;