import * as React from 'react'

import {
    BrowserRouter as Router,
    Link,
    match,
    Route,
} from 'react-router-dom'

interface ITopicPathParam {
    topicId: string;
}

export default class App extends React.Component<{}> {
    constructor(props: {}) {
        super(props)
    }
    public render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr />

                    <Route exact={true} path="/" component={this.Home} />
                    <Route path="/about" component={this.About} />
                    <Route path="/topics" component={this.Topics} />
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

    private About() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }

    private Topics(props: { match: match<{}> }) {
        const selectTopic = () => (
            <h3>Please select a topic.</h3>
        )
        const Topic = (topicProps: { match: match<ITopicPathParam> }) => (
            <div>
                <h3>{topicProps.match.params.topicId}</h3>
            </div>
        )
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${props.match.url}/rendering`}>
                            Rendering with React
            </Link>
                    </li>
                    <li>
                        <Link to={`${props.match.url}/components`}>
                            Components
            </Link>
                    </li>
                    <li>
                        <Link to={`${props.match.url}/props-v-state`}>
                            Props v. State
            </Link>
                    </li>
                </ul>

                <Route path={`${props.match.url}/:topicId`} component={Topic} />
                <Route exact={true} path={props.match.url} render={selectTopic} />
            </div>
        )
    }
}