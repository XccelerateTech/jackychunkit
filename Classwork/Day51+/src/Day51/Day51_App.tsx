import * as React from 'react';
import './Day51_App.css';

import logo from './logo.png';

class App extends React.Component {
  public render() {
    return (
      <>
        <header>
          <h1>Simple Website</h1>
        </header>
        <section>
          This is a simple website made without React. Try to convert this into React enabled.
            <ol>
            <li>First, you need to use <span className="command">create-react-app</span></li>
            <li>Second, you need to run <span className="command">npm start</span></li>
          </ol>
        </section>
        <footer>
          <img src={logo} />
        </footer>
      </>
    );
  }
}

export default App;
