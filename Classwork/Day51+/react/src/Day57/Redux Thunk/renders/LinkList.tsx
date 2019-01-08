import * as React from "react";

interface ILinkListProps {
  links: Array<{
    title: string,
    url: string
  }>,
  reloadLink: () => void,
  addLink: () => void,
  clearLink: () => void
}

export default class PureLinkList extends React.Component<ILinkListProps> {
  constructor(props: ILinkListProps) {
    super(props)
  }

  public render() {
    return (
      <div>
        <button onClick={this.props.reloadLink}> Reload </button>
        <button onClick={this.props.addLink}> New Link </button>
        <button onClick={this.props.clearLink}> Clear </button>
        <ul>
          {
            this.props.links.map((l, i) => (
              <li key={i} > {l.title} - {l.url} </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
