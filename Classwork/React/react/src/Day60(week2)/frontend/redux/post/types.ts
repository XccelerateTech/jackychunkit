export const POST_LINKS_SUCCESS = 'POST_LINKS_SUCCESS'
export interface ISuccessfulPostLinkActions {
    status: number
    type: typeof POST_LINKS_SUCCESS;
}

export const POST_LINK_FAIL = 'POST_LINK_FAIL'
export interface IFailurePostLinkActions {
    error: {}
    type: typeof POST_LINK_FAIL
}

export type PostLinkAction = ISuccessfulPostLinkActions | IFailurePostLinkActions