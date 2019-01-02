import * as React from "react";

interface ISquareProps {
  winner: (number[] | null),
  value: string | null,
  id: number
  onClick: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

export default class Square extends React.Component<ISquareProps> {
  constructor(props: ISquareProps) {
    super(props)
    this.highLight = this.highLight.bind(this)
  }

  public render() {
    return (
      <button key={this.props.id} className="square" id={'square' + this.props.id} onClick={this.props.onClick}>
        {this.highLight()}
      </button>
    );
  }

  private highLight() {
    if (this.props.winner !== null) {
      return (this.props.winner.some(e => {
        return e === this.props.id
      })) ? (<span className="winningRow">{this.props.value}</span>) : this.props.value
    } return this.props.value
  }
}