import * as React from 'react'

interface ILinkListProps {
    links: Array<{
        title: string,
        url: string
    }>,
    addLink: () => void,
    removeLink: (evt: React.MouseEvent<HTMLButtonElement>) => void
    clearLink: () => void
}

export default class PureLinkList extends React.Component<ILinkListProps> {
    constructor(props: ILinkListProps) {
        super(props)
    }

    public render() {
        return (
            <div>
                <button onClick={this.props.addLink}>New Link</button>
                <button onClick={this.props.clearLink}>Clear</button>
                {this.props.links.map((el, i) => (
                    <div key={i}>{el.title} - {el.url}  <button onClick={this.props.removeLink} id={String(i)}>Remove Link</button></div>
                ))}
            </div>
        );
    }
}