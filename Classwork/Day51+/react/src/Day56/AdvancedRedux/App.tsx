import * as React from "react";
import { connect, Provider } from "react-redux";
import PureLinkList from './PureLinkList'
import Redux from './redux'

class App extends React.Component {
  private LinkList = connect(Redux.mapStateToProps, Redux.mapDispatchToProps)(PureLinkList)

  public render() {
    return (
      <Provider store={Redux.store}>
        <div>
          <h2>Links</h2>
          <this.LinkList />
        </div>
      </Provider>
    );
  }
}

export default App