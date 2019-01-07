import { createStore } from "redux";

interface IRootState {
    links: Array<{
        title: string,
        url: string
    }>
    users: Array<{
        username: string,
        userId: number
    }>
}

const rootReducer = (state: IRootState) => {
    return {
        links: [
            { title: 'Google', url: 'http://www.google.com' },
            { title: 'Yahoo', url: 'http://www.yahoo.com' },
        ],
        users: [
            { username: 'Sam', userId: 1},
            { username: 'Altaf', userId: 2}
        ]
    }
};

export const store = createStore<IRootState, any, {}, {}>(rootReducer);

export const mapStateToProps = (state: IRootState) => {
    return {
        links: state.links,
        users: state.users
    }
}

