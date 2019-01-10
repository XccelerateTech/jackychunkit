import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../redux/store';
import action from '../redux/user/actions';
import { UserActions } from '../redux/user/types'
// import { SearchBox } from '../components/SearchBox';

interface IUserScreenProps {
  users: ReactExamples.User[];
  reloadUser: () => void;
}

class PureUser extends React.Component<IUserScreenProps> {
  public componentWillMount() {
    this.props.reloadUser();
  }

  public render() {
    return (
      <div>
        {/* <SearchBox onSearch={this.onFilter}></SearchBox> */}

        {this.props.users.map(user => (
          <ul className="list-group" key={user.id}>
            <li className="list-group-item">{user.name} - {user.email}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  users: state.user.users
})

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
  reloadUser: async () => {
    try {
      const data = await action.fetchUsers()
      dispatch(action.loadUsers(data))
    } catch (err) {
      throw err
    }
  }
})

export const User = connect(mapStateToProps,mapDispatchToProps)(PureUser);