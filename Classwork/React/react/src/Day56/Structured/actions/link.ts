import { Action } from "redux";

export const ADD_LINK = 'ADD_LINK';
export type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
export interface IAddLinkAction extends Action {
  link: {
    title: string,
    url: string
  };
  type: ADD_LINK;
}

// Define CLEAR_LINK const and its type
export const CLEAR_LINK = 'CLEAR_LINK';
export type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
export interface IClearLinkAction extends Action {
  type: CLEAR_LINK;
}

// Collection of both for easier integration
export type LinkActions = IAddLinkAction | IClearLinkAction;

export function addLink(title:string, url:string):IAddLinkAction {
  return {
    link: { title, url },
    type: ADD_LINK,
  }
}

export function clearLink():IClearLinkAction {
  return {
    type: CLEAR_LINK
  }
}