import axios from 'axios';
import { ILoadUsersAction, LOAD_USERS } from './types'

export default class Actions {
  public static loadUsers(users: ReactExamples.User[]): ILoadUsersAction {
    return {
      type: LOAD_USERS,
      users
    };
  }

  public static async fetchUsers() {
    try {
      const res = await axios.get<ReactExamples.User[]>(`${process.env.REACT_APP_API_SERVER}/api/users`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      return res.data
    } catch (err) {
      throw err
    }
  }
}

