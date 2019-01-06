import * as React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import AddLink from './AddLink'
import LinkList from './LinkList'

export default class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={LinkList} />
                    <Route path="/addLink" component={AddLink} />
                </Switch>
            </BrowserRouter>
        )
    }
}