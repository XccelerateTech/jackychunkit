import * as React from 'react';

interface IFormState {
    value: string;
}

export default class Form extends React.Component<{}, IFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: "Please write an essay about your favorite DOM element."
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    private handleChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ value: evt.target.value });
    }

    private handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        alert("An essay was submitted: " + this.state.value);
        evt.preventDefault();
    }
}