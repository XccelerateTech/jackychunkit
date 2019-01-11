import { GET_LINK_FAIL, GET_LINKS_SUCCESS, GetLinkAction, SEARCH_LINK } from './types'
        // tslint:disable:no-console
export interface ILinkState {
    error: null | {}
    links: Array<{
        id: number,
        url: string,
        tags: string[],
        title: string
    }>
    originalLinks: Array<{
        id: number,
        url: string,
        tags: string[],
        title: string
    }>
}

const initialState = {
    error: null,
    links: [],
    originalLinks: []
}

export const getReducer = (state: ILinkState = initialState, action: GetLinkAction) => {
    const trigger: Array<{
        id: number,
        url: string,
        tags: string[],
        title: string
    }> = []
    switch (action.type) {
        case GET_LINKS_SUCCESS:
            return {
                links: trigger.concat(action.links),
                originalLinks: trigger.concat(action.links)
            }
        case GET_LINK_FAIL:
            return {
                error: action.error
            }
        case SEARCH_LINK:
            const keyword = action.keyword
            if (!keyword) {
                return {
                    links: state.originalLinks,
                    originalLinks: state.originalLinks
                }
            } else if(state.originalLinks) {
                const links = state.originalLinks
                const result = links.filter(element => {
                    return (
                        keyword === element.url ||
                        keyword === element.title.toLowerCase() ||
                        element.tags.some(tag => tag === keyword)
                    )
                })
                return {
                    links: result,
                    originalLinks: state.originalLinks
                }
            }
        default:
            return state;
    }
}