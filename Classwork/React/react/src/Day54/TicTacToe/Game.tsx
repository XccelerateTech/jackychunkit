import * as React from "react";
import './App.css';
import GameRouter from './Router'

interface IGameStates {
    history: (Array<{ squares: Array<string | null> }>)
    stepHighlight: number | null;
    stepNumber: number;
    winByO: number
    winByX: number
    winHighlight: (number[] | null);
    winner: string | null;
    xIsNext: boolean;
}

export default class Game extends React.Component<{}, IGameStates> {
    constructor(props: {}) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepHighlight: null,
            stepNumber: 0,
            winByO: 0,
            winByX: 0,
            winHighlight: null,
            winner: null,
            xIsNext: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    public render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const moves = history.map((step, move) => {
            const jumpTo = () => {
                if (move > 0) {
                    const jumpTohistory = this.state.history.slice(0, move + 1);
                    const jumpTocurrent = jumpTohistory[jumpTohistory.length - 1];
                    const squares = jumpTocurrent.squares.slice();
                    if (this.calculateWinner(squares)) {
                        this.setState({
                            stepHighlight: move,
                            stepNumber: move,
                        });
                        return
                    }
                }
                this.setState({
                    stepHighlight: move,
                    stepNumber: move,
                    xIsNext: (move % 2) === 1,
                });
            }
            let desc: string | JSX.Element = move ?
                'Go to move #' + move :
                'Go to game start';
            if (move === this.state.stepHighlight) {
                desc = (<strong>{desc}</strong>)
            }
            return (
                <li key={move}>
                    <button id={'step' + move} onClick={jumpTo}>{desc}</button>
                </li>
            );
        });

        let status: string;
        if (this.state.winner) {
            status = 'Winner: ' + this.state.winner;
        } else if (this.state.stepNumber === 9) {
            status = 'The game is a drawn' 
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <GameRouter 
            boardWinner={this.state.winHighlight}
            boardSquares={current.squares}
            boardClickHandler={this.handleClick}
            gameInfoStatus={status}
            gameInfoMoves={moves}
            winInfoTimesOWin={this.state.winByO}
            winInfoTimesXWin={this.state.winByX}
            />
        )
    }

    private handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        this.setState({ winHighlight: null });
        if (evt.target !== null) {
            const index = evt.currentTarget.id.slice(-1);
            if (this.calculateWinner(squares) || this.state.winner || squares[index]) {
                return;
            }
            squares[index] = (this.state.xIsNext ? 'X' : 'O');
            this.setState({
                history: history.concat([{ squares }]),
                stepHighlight: null,
                stepNumber: history.length,
            });
            if (this.calculateWinner(squares)) {
                (this.state.xIsNext) ?
                    this.setState({
                        winByX: this.state.winByX + 1
                    }) : 
                    this.setState({
                        winByO: this.state.winByO + 1
                    })
                return;
            } else {
                this.setState({ xIsNext: !this.state.xIsNext })
            }
        }
    }

    private calculateWinner(squares: Array<string | null>): string | null {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const row of lines) {
            const [a, b, c] = row;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                this.setState({
                    winHighlight: row,
                    winner: this.state.xIsNext ? 'X' : 'O'
                })
                return squares[a];
            }
        }
        this.setState({
            winHighlight: null,
            winner: null
        })
        return null;
    }
}