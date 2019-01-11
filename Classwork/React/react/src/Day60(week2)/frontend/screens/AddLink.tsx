import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import getAction from '../redux/get/actions'
import { GetLinkAction } from '../redux/get/types';
import postAction from '../redux/post/actions';
import { PostLinkAction } from '../redux/post/types'
import { IRootState } from '../redux/store';

interface IFormProps {
    links: Array<{
        id: number,
        tags: string[]
        title: string,
        url: string,
    }>
    status: number
    onSubmit: (link: IFormState) => void
    onLoad: () => void
}

interface IFormState {
    tags: string[]
    title: string
    url: string
}

class AddLink extends React.Component<IFormProps, IFormState> {
    protected savedList = this.props.links
    constructor(props: IFormProps) {
        super(props)
        this.state = {
            tags: [],
            title: '',
            url: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    public componentWillMount() {
        this.props.onLoad()
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
        if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(this.state.url)) {
            return alert('Invalid URL input')
        }
        if (this.savedList.some(link => link.url === this.state.url)) {
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
        this.props.onSubmit(this.state)
    }
}

const mapStateToProps = (state: IRootState) => ({
    error: (state.post.error || state.get.error || null),
    links: state.get.links,
    status: state.post.status
})

const mapDispatchToProps = (dispatch: Dispatch<GetLinkAction|PostLinkAction>) => ({
    async onLoad() {
        try{
            const res = await getAction.getLink()
            dispatch(getAction.getLinkSuccess(res))
        } catch (err) {
            dispatch(getAction.getLinkFailure(err))
        }
    },
    async onSubmit(link: IFormState) {
        try {
            const res = await postAction.postLink(link)
            dispatch(postAction.postLinkSuccess(res))
        } catch(err) {
            dispatch(postAction.postLinkFailure(err))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddLink)