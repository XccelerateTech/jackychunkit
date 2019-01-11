import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import action from '../redux/get/actions'
import { GetLinkAction } from '../redux/get/types';
import { IRootState } from '../redux/store';
import './list.css'

interface IListProps {
    error: {} | null
    links: Array<{
        id: number,
        url: string,
        tags: string[],
        title: string
    }>
    getLinks: () => void
    searchLinks: (keyword: string) => void
}

class LinkList extends React.Component<IListProps> {
    constructor(props: IListProps) {
        super(props)
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

    public componentWillMount() {
        this.props.getLinks()
    }

    private renderLinks() {
        if (this.props.links) {
            return (
                <div className='Links'>
                    Links<input onKeyUp={this.search} placeholder='search' />
                    {this.props.links.map(element => {
                        if (/^http:\/\//g.test(element.url)) {
                            element.url = element.url.slice(7)
                        } else if (/^https:\/\//g.test(element.url)) {
                            element.url = element.url.slice(8)
                        }
                        return (
                            <ol key={element.url}>
                                <ul>Title: {element.title}</ul>
                                <ul>URL: <a href={'http://' + element.url}>{element.url}</a></ul>
                                <ul>tags: {(element.tags) ?
                                        element.tags.map(tag => (<span key={tag}>{tag},</span>)) : null
                                    }</ul>
                            </ol>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className='Links'>
                Links<input onKeyUp={this.search} placeholder='search' />
                    No link found
                </div>
            )
        }
    }

    private search(evt: React.KeyboardEvent<HTMLInputElement>) {
        const keyword = evt.currentTarget.value.toLowerCase()
        this.props.searchLinks(keyword)
    }
}

const mapStateToProps = (state: IRootState) => ({
    error: state.get.error,
    links: state.get.links
})

const mapDispatchToProps = (dispatch: Dispatch<GetLinkAction>) => ({
    async getLinks() {
        try {
            const res = await action.getLink()
            dispatch(action.getLinkSuccess(res))
        } catch (err) {
            dispatch(action.getLinkFailure(err))
        }
    },
    searchLinks(keyword: string) {
        dispatch(action.searchLink(keyword))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);