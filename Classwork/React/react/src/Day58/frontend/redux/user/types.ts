export const LOAD_USERS = 'LOAD_USERS';
export interface ILoadUsersAction {
  type: typeof LOAD_USERS;
  users: ReactExamples.User[];
}

export type UserActions = ILoadUsersAction;