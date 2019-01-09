import { Action } from "redux";

export interface ILink {
    title: string,
    url: string
}

export const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface IAddLinkAction extends Action {
    type: ADD_LINK;
    link: ILink;
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
export interface IClearLinkAction extends Action {
    type: CLEAR_LINK;
}

export const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';
type LOAD_LINK_SUCCESS = typeof LOAD_LINK_SUCCESS;

export interface ILoadLinkSuccessAction extends Action {
    type: LOAD_LINK_SUCCESS;
    links: ILink[];
}

export const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';
type LOAD_LINK_FAILURE = typeof LOAD_LINK_FAILURE;

export interface ILoadLinkFailureAction extends Action {
    type: LOAD_LINK_FAILURE;
}

// Collection of all actions for easier integration
export type LinkActions = IAddLinkAction | IClearLinkAction | ILoadLinkSuccessAction | ILoadLinkFailureAction;

