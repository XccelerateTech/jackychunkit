export const ERROR_RESET = 'ERROR_RESET';
export const ERROR_DISPLAY = 'ERROR_DISPLAY';

interface IErrorResetAction {
  type: typeof ERROR_RESET;
}

interface IErrorDisplayAction {
  type: typeof ERROR_DISPLAY;
  error: string;
}

export type ErrorActions = IErrorResetAction | IErrorDisplayAction;