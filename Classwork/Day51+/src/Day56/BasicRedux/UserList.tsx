import * as React from 'react'

interface IUserListProps {
    users: Array<{
        username: string,
        userId: number
    }>
  }
  
export default class UserList extends React.Component<IUserListProps> {
    constructor(props: IUserListProps) {
        super(props)
    }

    public render() {
        return (
            <div>
              {this.props.users.map(user => (
                <div>{user.username} - {user.userId}</div>
              ))}
            </div>
          );
    }
  }