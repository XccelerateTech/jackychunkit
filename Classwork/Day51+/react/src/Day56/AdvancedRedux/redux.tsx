import { Action, createStore, Dispatch } from "redux";

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;
interface IAddLinkAction extends Action {
    link: {
        title: string,
        url: string
    };
    type: ADD_LINK;
}

const REMOVE_LINK = 'REMOVE_LINK';
type REMOVE_LINK = typeof REMOVE_LINK;
interface IRemoveLinkAction extends Action {
    targetID: number
    type: REMOVE_LINK;
}

const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;
interface IClearLinkAction extends Action {
    type: CLEAR_LINK;
}

// Collection of both for easier integration
type LinkActions = IAddLinkAction | IRemoveLinkAction | IClearLinkAction;

interface IRootState {
    links: Array<{
        title: string,
        url: string
    }>
}

export default class Redux {
    public static store = createStore<{}, any, {}, {}>(Redux.rootReducer);

    public static mapStateToProps(state: IRootState) {
        return state
    }

    public static mapDispatchToProps(dispatch: Dispatch<LinkActions>) {
        return {
            addLink: () => dispatch({
                link: {
                    title: 'Accelerate',
                    url: 'http://www.acceleratedhk.com'
                },
                type: ADD_LINK
            }),
            clearLink: () => dispatch({
                type: CLEAR_LINK
            }),
            removeLink: (evt: React.MouseEvent<HTMLButtonElement>) =>
                dispatch({
                    targetID: Number(evt.currentTarget.id),
                    type: REMOVE_LINK
                })
        }
    }

    private static rootReducer(state: IRootState = {
        links: []
    }, action: LinkActions /* add parameter here */) {
        // Use switch to handle different actions
        switch (action.type) {
            case ADD_LINK:
                return {
                    links: state.links.concat([action.link]) // Use concat to add a new link
                }
            case REMOVE_LINK:
                const links: Array<{
                    title: string,
                    url: string
                }>= []
                for (let i:number = 0; i < state.links.length; i++) {
                    if (i !== action.targetID) {
                        links.push(state.links[i])
                    }
                }
                return { links }
            case CLEAR_LINK:
                return {
                    links: [] // Reset the link
                }
            default:
                return state; // Do not change the state in case of any other actions
        }
    };
}