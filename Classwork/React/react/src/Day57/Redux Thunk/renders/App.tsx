import * as React from 'react'
import { Provider } from 'react-redux'
import LinkList from '../connect'
import store from '../store';

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store} >
        <div>
          <h2>Links </h2>
          <LinkList />
        </div>
      </Provider>
    )
  }
}