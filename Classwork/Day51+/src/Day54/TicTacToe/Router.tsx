import * as React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import Board from './Board';

interface IRouterProps {
    boardWinner: (number[] | null);
    boardSquares: Array<string | null>
    boardClickHandler: ((evt: React.MouseEvent<HTMLButtonElement>) => void)
    gameInfoStatus: string
    gameInfoMoves: JSX.Element[]
    winInfoTimesOWin: number
    winInfoTimesXWin: number
}

export default class GameRouter extends React.Component<IRouterProps> {
    constructor(props: IRouterProps) {
        super(props)
        this.render = this.render.bind(this)
        this.gameInfo = this.gameInfo.bind(this)
        this.winInfo = this.winInfo.bind(this)
    }

    public render() {
        return (
            <Router>
                <div className="game">
                    <div className="game-board">
                        <Board
                            winner={this.props.boardWinner}
                            squares={this.props.boardSquares}
                            onClick={this.props.boardClickHandler}
                        />
                    </div>
                    <Route exact={true} path="/" component={this.gameInfo} />
                    <Route exact={true} path="/scoreboard" component={this.winInfo} />
                </div>
            </Router>

        );
    }

    private gameInfo() {
        return (
            <div className="game-info">
                <Link to='/scoreboard'><button>Scoreboard</button></Link>
                <div>{this.props.gameInfoStatus}</div>
                <ol>{this.props.gameInfoMoves}</ol>
            </div>
        )
    }

    private winInfo() {
        return (
            <div className="win-info">
                <Link to='/'><button>Game Log</button></Link>
                <div>number of wins of O:{this.props.winInfoTimesOWin}</div>
                <div>number of wins of X:{this.props.winInfoTimesXWin}</div>
            </div>
        )
    }
}