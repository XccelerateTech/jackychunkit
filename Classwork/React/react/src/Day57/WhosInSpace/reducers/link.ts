import * as link from '../actions/types'

export type LinkState = Array<{
    name: string,
    craft: string
}>

export const linkReducer = (state: LinkState = [], action: link.LinkActions /* add parameter here */): LinkState => {
    // Use switch to handle different actions
    switch (action.type) {
        case link.LOAD_LINK_SUCCESS:
            return action.people; // Override the links
        case link.LOAD_LINK_FAILURE:
            return []; // Override the links
        default:
            return state; // Do not change the state in case of any other actions
    }
};
