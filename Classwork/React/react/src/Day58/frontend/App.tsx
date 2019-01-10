import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { RouterOutlet } from './RouterOutlet';

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <RouterOutlet />
        </Router>
      </Provider>
    );
  }
}
