import * as React from 'react';

interface IFormState {
    value: string;
}

export default class Form extends React.Component<{}, IFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: 'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    private handleChange(evt: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ value: evt.target.value });
    }

    private handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        alert('Your favorite flavor is: ' + this.state.value);
        evt.preventDefault();
    }
}