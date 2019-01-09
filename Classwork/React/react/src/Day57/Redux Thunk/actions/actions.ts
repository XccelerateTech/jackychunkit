import axios from 'axios';
import * as type from './types'

export default class LinkActionMethods {
    public static addLink(title: string, url: string): type.IAddLinkAction {
        return {
            link: { title, url },
            type: type.ADD_LINK,
        }
    }

    public static clearLink(): type.IClearLinkAction {
        return {
            type: type.CLEAR_LINK
        }
    }

    public static loadLinkSuccess(links: type.ILink[]): type.ILoadLinkSuccessAction {
        return {
            links,
            type: type.LOAD_LINK_SUCCESS,
        }
    }

    public static loadLinkFailure(): type.ILoadLinkFailureAction {
        return {
            type: type.LOAD_LINK_FAILURE
        }
    }

    public static async loadLink() {
        try {
            const res = await axios('https://www.reddit.com/r/programming.json')
            const threads = res.data;
            const links = threads.data.children.map((t: any) => ({
                title: t.data.title,
                url: t.data.url
            }));
            return links
        } catch (err) {
            return null
        }
    }
}