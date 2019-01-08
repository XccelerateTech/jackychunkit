import * as React from 'react';

interface IFormState {
    value: string;
}

export default class Form extends React.Component<{}, IFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    private handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: evt.target.value });
    }

    private handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        alert('A name was submitted: ' + this.state.value);
        evt.preventDefault();
    }
}