import * as React from "react";
import './App.css';
import Board from './Board';

interface IGameStates {
    history: (Array<{ squares: Array<string | null> }>)
    stepHighlight: number | null;
    stepNumber: number;
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
            winHighlight: null,
            winner: null,
            xIsNext: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.jumpTo = this.jumpTo.bind(this)
    }

    public render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        const moves = history.map((step, move) => {
            let desc: string | JSX.Element = move ?
                'Go to move #' + move :
                'Go to game start';
            if (move === this.state.stepHighlight) {
                desc = (<strong>{desc}</strong>)
            }
            return (
                <li key={move}>
                    <button id={'step' + move} onClick={this.jumpTo}>{desc}</button>
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
            <div className="game">
                <div className="game-board">
                    <Board
                        winner={this.state.winHighlight}
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
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
                return;
            } else {
                this.setState({ xIsNext: !this.state.xIsNext })
            }
        }
    }

    private jumpTo(evt: React.MouseEvent<HTMLButtonElement>) {
        if (evt.target !== null) {
            const index = Number.parseInt(evt.currentTarget.id.slice(-1), 10);
            if (index > 0) {
                const history = this.state.history.slice(0, index + 1);
                const current = history[history.length - 1];
                const squares = current.squares.slice();
                if(this.calculateWinner(squares)) {
                    this.setState({
                        stepHighlight: index,
                        stepNumber: index,
                    });
                    return
                }
            }
            this.setState({
                stepHighlight: index,
                stepNumber: index,
                xIsNext: (index % 2) === 1,
            });
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