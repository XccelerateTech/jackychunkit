import { Action } from "redux";

export interface IPeople {
    name: string,
    craft: string
}

export const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';
type LOAD_LINK_SUCCESS = typeof LOAD_LINK_SUCCESS;

export interface ILoadLinkSuccessAction extends Action {
    type: LOAD_LINK_SUCCESS;
    people: IPeople [];
}

export const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';
type LOAD_LINK_FAILURE = typeof LOAD_LINK_FAILURE;

export interface ILoadLinkFailureAction extends Action {
    type: LOAD_LINK_FAILURE;
}

// Collection of all actions for easier integration
export type LinkActions = ILoadLinkSuccessAction | ILoadLinkFailureAction;

