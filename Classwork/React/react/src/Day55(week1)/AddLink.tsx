import * as React from 'react'

interface IFormState {
    tags: string[]
    title: string
    url: string
}

export default class AddLink extends React.Component<{}, IFormState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            tags: [],
            title: '',
            url: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Title' name='title' onChange={this.handleChange} />
                <input type="text" placeholder='URL' name='url' onChange={this.handleChange} />
                <input type="text" placeholder='Tags' name='tags' onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }

    private handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        switch (evt.target.name) {
            case 'title':
                this.setState({ title: evt.target.value })
                break;
            case 'url':
                this.setState({ url: evt.target.value })
                break;
            case 'tags':
            let tags = evt.target.value.split(',')
            tags = tags.filter(tag => !/^ *$/g.test(tag))
                this.setState({ tags })
                break;
        }
    }

    private handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const savedList = localStorage.getItem('react-week-one-link-list')
        const parsedList: Array<{ tags: string[], title: string, url: string }> = (savedList) ? JSON.parse(savedList) : [];
        if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(this.state.url)) {
            return alert('Invalid URL input')
        }
        if (parsedList.some(link => link.url === this.state.url)) {
            return alert('URL already exists in the list')
        }
        if (!this.state.title) {
            return alert('Please Enter a title')
        }
        for (let i: number = 0; i < this.state.tags.length; i++) {
            const tags = this.state.tags.sort()
            if (tags[i] === tags[i + 1]) {
                return alert('Duplicated tag ' + tags[i])
            }
        }
        parsedList.push({
            tags: this.state.tags,
            title: this.state.title,
            url: this.state.url
        })
        localStorage.setItem('react-week-one-link-list', JSON.stringify(parsedList))
        alert('Added')
        window.location.href = '/'
    }
}


