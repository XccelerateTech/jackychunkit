import * as React from "react";
import { connect, Provider } from "react-redux";
import {mapStateToProps, store} from './createStore'
import PureLinkList from './PureLinkList'
import UserList from './UserList'

class App extends React.Component {
  private LinkList = connect(mapStateToProps)(PureLinkList)
  private UserList = connect(mapStateToProps)(UserList)

  public render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Links</h2>
          <this.LinkList />
          <this.UserList />
        </div>
      </Provider>
    );
  }
}

export default App