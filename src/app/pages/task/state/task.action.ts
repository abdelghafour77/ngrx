import { createAction, props } from "@ngrx/store";
import { ITask } from "../task.model";


export const loadTasks = createAction('[Task] Load Tasks');

export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{tasks: ITask[]}>());

export const loadTasksError = createAction('[Task] Load Tasks Error');