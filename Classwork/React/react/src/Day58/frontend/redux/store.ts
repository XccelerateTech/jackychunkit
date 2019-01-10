import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer as AuthReducer, IAuthState } from './auth/reducer';
import { IGroupState, reducer as GroupReducer } from './group/reducer';
import { IUserState, reducer as UserReducer } from './user/reducer';

export interface IRootState {
  group: IGroupState;
  user: IUserState;
  auth: IAuthState;
}

export const store = createStore(
  combineReducers({
    auth: AuthReducer,
    group: GroupReducer,
    user: UserReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);