export const LOAD_GROUPS = 'LOAD_GROUPS';
export interface ILoadGroupsAction {
  type: typeof LOAD_GROUPS;
  groups: ReactExamples.Group[];
}

export type GroupActions = ILoadGroupsAction;