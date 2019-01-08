import { combineReducers } from 'redux'
import { ILinkState, linkReducer } from './link'

export interface IRootState {
    links: ILinkState
}

export const rootReducer = combineReducers<IRootState>({
    links: linkReducer
})
