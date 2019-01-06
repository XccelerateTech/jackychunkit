
import * as React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import './index.css'
import LinkDetail from './LinkDetail'
import LinkList from './LinkList'
import NoMatch from './NoMatch'
 
export default class App extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/links">Links</Link></li>
                        <li><Link to="/reallyInvalidUrl">Invalid Page</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact={true} path="/" component={this.Home} />
                        <Route exact={true} path="/links" component={LinkList} />
                        <Route path="/links/:id" component={LinkDetail} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        )
    }

    private Home() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}
