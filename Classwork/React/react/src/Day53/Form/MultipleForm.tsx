import * as React from 'react';

interface IFormState {
    isGoing: boolean;
    numberOfGuests: number;
}

export default class Form extends React.Component<{}, IFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is going:
          <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Number of guests:
          <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    private handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const target = evt.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (typeof value !== 'undefined') {
            const temp = {}
            temp[name] = value
            this.setState(temp);
        }
    }

    private handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        alert(`${this.state.numberOfGuests} guests will ${this.state.isGoing ? '' : 'not'} be going.`);
        evt.preventDefault();    
    }
}