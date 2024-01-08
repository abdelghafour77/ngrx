import { createReducer, on } from "@ngrx/store";
import { ITask } from "../task.model";
import * as TaskActions from './task.action';


export interface TaskState {
      tasks: ITask[];
      error: string;
}

export const initialState: TaskState = {
      tasks: [],
      error: 'error initial'
}

export const taskReducer = createReducer<TaskState>(
      initialState,

      on(TaskActions.loadTasksSuccess, (state, action): TaskState => {
            return {
                  ...state,
                  tasks: action.tasks
            }
      })
);