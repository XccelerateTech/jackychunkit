import * as React from "react";
import Square from './Square';

interface IBoardProps {
    winner: (number[] | null)
    squares: Array<string | null>;
    onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

export default class Board extends React.Component<IBoardProps, {}> {
    public render() {
        return (
            <div>
                <div className="status">{status}</div>
                {this.renderBoard()}
            </div>
        );
    }

    private renderBoard() {
        const iterator = [0, 3, 6];
        return (
            <div>
                {iterator.map(el => <div key={el} className="board-row">{this.renderRow(el)}</div>)}
            </div>
        )
    }

    private renderRow(i: number) {
        const iterator = [i, i += 1, i += 1];
        return (
            <div className="board-row">
                {iterator.map(el => <span key={el}>{this.renderSquare(el)}</span>)}
            </div>
        )
    }

    private renderSquare(i: number) {
        return <Square
            winner={this.props.winner}
            value={this.props.squares[i]}
            id={i}
            onClick={this.props.onClick}
        />
    }
}