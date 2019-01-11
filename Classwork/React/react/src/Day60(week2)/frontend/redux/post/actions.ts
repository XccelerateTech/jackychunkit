import axios from 'axios';
import { IFailurePostLinkActions, ISuccessfulPostLinkActions, POST_LINK_FAIL, POST_LINKS_SUCCESS } from './types';

export default class {
    public static postLinkSuccess(status: number): ISuccessfulPostLinkActions {
        alert("Success")
        window.location.href = '/'
        return {
            status,
            type: POST_LINKS_SUCCESS
        }
    }

    public static postLinkFailure(error: {}): IFailurePostLinkActions {
        alert(error)
        window.location.href = '/addLink'
        return {
            error,
            type: POST_LINK_FAIL
        }
    }

    public static async postLink(link: { title: string, url: string, tags: string[]}) {
        try {
            const res = await axios.post('http://localhost:8080/api/links', link)
            return res.status
        } catch (err) {
            throw err
        }
    }
}