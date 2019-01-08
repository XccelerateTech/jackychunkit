import * as History from "history";
import * as React from "react";
import { match } from "react-router-dom";
import links from "./links";

interface ILinkFormRouteParamProps {
    id: string;
}

interface ILinkFormProps {
    match: match<ILinkFormRouteParamProps>;
    location: History.Location;
    history: History.History;
}

export default class LinkDetail extends React.Component<ILinkFormProps> {
    constructor(props: ILinkFormProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h2>{links[this.props.match.params.id].title}</h2>
                <p>{links[this.props.match.params.id].url}</p>
                <p>State: {JSON.stringify(this.props.location.state)}</p>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        );
    }

    private goBack = () => {
        this.props.history.goBack();
    };
}
