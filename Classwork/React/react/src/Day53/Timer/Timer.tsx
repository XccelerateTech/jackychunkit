import * as React from 'react';

interface ITimerStates {
    timeElasped: number
    timerActive: boolean
}

export default class Timer extends React.Component<{}, ITimerStates> {
    private timerID: number;
    constructor(props: {}) {
        super(props);
        this.state = {
            timeElasped: 0,
            timerActive: false
        };
        this.startTimer = this.startTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }
    
    public render() {
        return (
            <div>
                <h1>Timer</h1>
                <button onClick={this.startTimer}>Start Timer</button>
                <button onClick={this.pauseTimer}>Pause Timer</button>
                <button onClick={this.stopTimer}>Stop Timer</button>
                <h2>{this.showTime()}s</h2>
            </div>
        );
    }

    private showTime() {
        let ms: string | number = this.state.timeElasped
        let sec: string | number = '00'
        let min: string | number = '00'
        let hour: string | number = 0
        if (String(ms).length === 1) {
            ms = '0' + ms
        } else if (String(ms).length > 2) {
            sec = Math.floor(ms / 100)
            sec %= 60
            min = Math.floor(ms / 6000)
            min %= 60
            hour = Math.floor(ms / 360000)
            ms = String(ms).slice(-2, String(ms).length)
            if (String(sec).length === 1) {
                sec = '0' + sec
            }
            if (String(min).length === 1) {
                min = '0' + min
            }
        }

        
        return `${hour}"${min}'${sec}.${ms}`
    }

    private startTimer() {
        this.timerID = window.setInterval(() => this.tick(), 10);
        this.setState({
            timerActive: true
        })
    }

    private pauseTimer() {
        clearInterval(this.timerID);
        this.setState({
            timerActive: false
        })
    }

    private stopTimer() {
        this.pauseTimer()
        this.setState({
            timeElasped: 0
        })
    }

    private tick() {
        let nextTick = this.state.timeElasped
        this.setState({
            timeElasped: nextTick += 1
        });
    }
}