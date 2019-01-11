export const GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS'
export interface ISuccessfulGetLinkActions {
    links: Array<{
        id: number,
        tags: string[]
        title: string,
        url: string,
    }>
    type: typeof GET_LINKS_SUCCESS;
}

export const GET_LINK_FAIL = 'GET_LINK_FAIL'
export interface IFailureGetLinkActions {
    error: {}
    type: typeof GET_LINK_FAIL
}

export const SEARCH_LINK = 'SEARCH_LINK'
export interface ISearchLinkActions {
    keyword: string
    type: typeof SEARCH_LINK
}

export type GetLinkAction = ISuccessfulGetLinkActions | IFailureGetLinkActions | ISearchLinkActions