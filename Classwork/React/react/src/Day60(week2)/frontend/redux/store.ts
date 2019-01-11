import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getReducer, ILinkState as getState } from './get/reducer';
import { ILinkState as postState, postReducer } from './post/reducer';

export interface IRootState {
  get: getState
  post: postState
}

export const store = createStore(
  combineReducers({
    get: getReducer,
    post: postReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);