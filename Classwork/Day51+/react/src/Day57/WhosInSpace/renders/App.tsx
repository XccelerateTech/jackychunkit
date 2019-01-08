import * as React from 'react'
import { Provider } from 'react-redux'
import NameList from '../connect'
import store from '../store';

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store} >
        <div>
          <h2>People in space </h2>
          <NameList />
        </div>
      </Provider>
    )
  }
}