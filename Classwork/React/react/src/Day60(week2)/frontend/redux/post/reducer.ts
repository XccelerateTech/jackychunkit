import { POST_LINK_FAIL, POST_LINKS_SUCCESS, PostLinkAction } from './types'

export interface ILinkState {
    error: null | {}
    status: number
}

const initialState = {
    error: null,
    status: 200
}

export const postReducer = (state: ILinkState = initialState, action: PostLinkAction) => {
    switch(action.type) {
        case POST_LINKS_SUCCESS:
        return {
            status: action.status
        }
        case POST_LINK_FAIL:
        return {
            error: action.error
        }
        default:
        return state;
    }
}