import * as React from 'react';

interface IClockStates {
    date: Date
}

export default class Clock extends React.Component<{}, IClockStates> {
    private timerID: number;
    constructor(props: {}) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    public componentDidMount() {
        this.timerID = window.setInterval(() => this.tick(), 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.timerID);
    }

    public render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    private tick() {
        this.setState({
            date: new Date()
        });
    }
}