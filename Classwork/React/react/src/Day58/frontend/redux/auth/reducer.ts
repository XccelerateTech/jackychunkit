import { LOGIN_FAILURE, LOGIN_SUCCESS, LoginActions, LOGOUT } from './types';

export interface IAuthState {
  error: null | string;
  isAuthenticated: boolean;
}

const initialState = {
  error: null,
  isAuthenticated: false
};

export function authReducer(state: IAuthState = initialState, action: LoginActions) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        error: action.message,
        isAuthenticated: false,
      }
    case LOGIN_SUCCESS:
      return {
        error: null,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        error: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
