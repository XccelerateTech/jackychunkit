import axios from 'axios';
import { GET_LINK_FAIL, GET_LINKS_SUCCESS, IFailureGetLinkActions, ISearchLinkActions, ISuccessfulGetLinkActions, SEARCH_LINK } from './types';

export default class {
    public static getLinkSuccess(links: Array<{
        id: number,
        url: string,
        tags: string[],
        title: string
    }>): ISuccessfulGetLinkActions {
        return {
            links,
            type: GET_LINKS_SUCCESS,  
        }
    }

    public static getLinkFailure(error: {}): IFailureGetLinkActions {
        return {
            error,
            type: GET_LINK_FAIL
        }
    }

    public static searchLink(keyword: string): ISearchLinkActions {
        return {
            keyword,
            type: SEARCH_LINK,
        }
    }

    public static async getLink() {
        try {
            const res = await axios.get('http://localhost:8080/api/links')
            return res.data.links
        } catch (err) {
            throw err
        }
    }
}