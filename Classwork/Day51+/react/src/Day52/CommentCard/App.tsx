import * as React from 'react';
import './App.css';

interface IListProps {
  list: Array<{ id: number, name: string, comment: string }>;
}

export default class App extends React.Component<IListProps> {
  public props: IListProps
  constructor(props: IListProps) {
    super(props)
  }

  public render() {
    return (
      <div>
        {this.navbar()}
        {this.content()}
      </div>
    );
  }

  private content() {
    return this.props.list.map((item: { id: number, name: string, comment: string }) =>
      <div key={item.id} className='commentCard'>
        <p>{item.name}</p>
        <p>{item.comment}</p>
        <span id='approve'>Approve</span>     <span id='reject'>Reject</span>
      </div>
    );
  }

  private navbar() {
    return (
        <div id='navbar'>
        <h3>Comment Cards</h3>
        </div>
    )
  }
}

