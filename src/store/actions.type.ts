export type IAction =
  | 'Add'
  | 'Delete'
  | 'Update'
  | 'LoadTodos'
  | 'SetTodos'
  | 'Filter'
  | 'SetField';

export const ADD = '[ADD] TASK';
export const DELETE = '[DELETE] TASK';
export const UPDATE = '[UPDATE] TASK';
export const FILTER = '[FILTER] TASKS';
export const LOAD_TODOS = '[LOAD] TODOS';
