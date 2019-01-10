import { GroupActions, LOAD_GROUPS } from './types';

export interface IGroupState {
  groups: ReactExamples.Group[];
}

const initialState = {
  groups: []
};

export const reducer = (state: IGroupState = initialState, action: GroupActions) => {
  switch (action.type) {
    case LOAD_GROUPS:
      return {
        ...state,
        groups: action.groups
      };
    default:
      return initialState;
  }
};