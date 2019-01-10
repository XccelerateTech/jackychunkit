import axios from 'axios';
import { ILoginFailureAction, ILoginSuccessAction, ILogOutAction, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './types'

export default class Actions {
  public static loginSuccess(): ILoginSuccessAction {
    return {
      type: LOGIN_SUCCESS
    };
  }

  public static loginFailure(message: string): ILoginFailureAction {
    return {
      message,
      type: LOGIN_FAILURE,
    };
  }

  public static logOutAction(): ILogOutAction {
    localStorage.removeItem('token');
    return {
      type: LOGOUT
    };
  }

  public static async loginUser(password: string, username: string) {
    try {
      const res = await axios.post<{ token: string; message: string }>(
        `${process.env.REACT_APP_API_SERVER}/api/login`, { password, username }
      )
      // tslint:disable-next-line:no-console
      if (res.data == null) {
        return 'Unknown Error'
      } else if (!res.data.token) {
        return res.data.message || ''
      } else {
        localStorage.setItem('token', res.data.token);
        return 'Success'
      }
    } catch (err) {
      throw err
    }
  }

  public static async loginFacebook(accessToken: string) {
    try {
      const res = await axios.post<{ token: string; message?: string }>(
        `${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
        {
          access_token: accessToken
        }
      )
      if (res.data == null) {
        return 'Unknown Error'
      } else if (!res.data.token) {
        return res.data.message || ''
      } else {
        localStorage.setItem('token', res.data.token);
        return 'Success'
      }
    } catch (err) {
      throw err
    }
  };
}