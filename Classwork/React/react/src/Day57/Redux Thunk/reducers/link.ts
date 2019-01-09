import * as link from '../actions/types'

export type LinkState = Array<{
    title: string,
    url: string
}>

export const linkReducer = (state: LinkState = [], action: link.LinkActions /* add parameter here */): LinkState => {
    // Use switch to handle different actions
    switch (action.type) {
        case link.ADD_LINK:
            return state.concat([action.link]); // Use concat to add a new link
        case link.CLEAR_LINK:
            return []; // Reset the link
        case link.LOAD_LINK_SUCCESS:
            return action.links; // Override the links
        case link.LOAD_LINK_FAILURE:
            return []; // Override the links
        default:
            return state; // Do not change the state in case of any other actions
    }
};
