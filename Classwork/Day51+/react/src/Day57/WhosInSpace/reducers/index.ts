import { combineReducers } from 'redux'
import { linkReducer, LinkState } from './link'

export interface IRootState {
  people: LinkState
}

export const rootReducer = combineReducers<IRootState>({
  people: linkReducer
})
