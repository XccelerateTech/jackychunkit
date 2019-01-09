import * as React from "react";

interface IPeopleProps {
  people: Array<{
    name: string,
    craft: string
  }>,
  reloadLink: () => void,
}

export default class PureNameList extends React.Component<IPeopleProps> {
  constructor(props: IPeopleProps) {
    super(props)
    this.props.reloadLink()
  }

  public render() {
    return (
      <div>
        <button onClick={this.props.reloadLink}> Refresh </button>
        <ul>
          {
            this.props.people.map((l, i) => (
              <li key={i} > {l.name} - {l.craft} </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
