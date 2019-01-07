import * as React from 'react'

interface ILinkListProps {
    links: Array<{
      title: string,
      url: string
    }>
  }
  
export default class PureLinkList extends React.Component<ILinkListProps> {
    constructor(props: ILinkListProps) {
        super(props)
    }

    public render() {
        return (
            <div>
              {this.props.links.map(l => (
                <div>{l.title} - {l.url}</div>
              ))}
            </div>
          );
    }
  }