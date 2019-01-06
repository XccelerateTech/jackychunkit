import * as React from 'react'
import './list.css'

interface ILinkState {
    links: Array<{ tags: string[], title: string, url: string }>
}

export default class LinkList extends React.Component<{}, ILinkState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            links: this.getLink()
        }
        this.search = this.search.bind(this)
    }
    public render() {
        return (
            <>
                {this.renderLinks()}
                <a href='/addLink'>Add another Link</a>
            </>
        )
    }

    private renderLinks() {
        if (this.state.links) {
            return (
                <div className='Links'>
                    Links<input onKeyUp={this.search} placeholder='search' />
                    {this.state.links.map(element => {
                        if (/^http:\/\//g.test(element.url)) {
                            element.url = element.url.slice(7)
                        } else if (/^https:\/\//g.test(element.url)) {
                            element.url = element.url.slice(8)
                        }
                        return (
                            <ol key={element.url}>
                                <ul>Title: {element.title}</ul>
                                <ul>URL: <a href={'http://' + element.url}>{element.url}</a></ul>
                                <ul>tags: {element.tags.map(tag => (<span key={tag}>{tag},</span>))}</ul>
                            </ol>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className='Links'>
                    No link found
                </div>
            )
        }
    }

    private search(evt: React.KeyboardEvent<HTMLInputElement>) {
        const keyword = evt.currentTarget.value.toLowerCase()
        if (!keyword) {
            this.setState({
                links: this.getLink()
            })
        } else {
            const links: Array<{ tags: string[], title: string, url: string }> = this.getLink()
            const result = links.filter(element => {
                return (
                    keyword === element.url ||
                    keyword === element.title.toLowerCase() ||
                    element.tags.some(tag => tag === keyword)
                )
            })
            this.setState({
                links: result
            })
        }
    }

    private getLink() {
        const links = localStorage.getItem('react-week-one-link-list')
        if (links) {
            return JSON.parse(links);
        }
    }
}