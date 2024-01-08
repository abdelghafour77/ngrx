import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "./task.reducer";


const getTaskSelectorState = createFeatureSelector<TaskState>('task'); 

export const getTasks = createSelector(
      getTaskSelectorState,
      state => state.tasks
);

export const getError = createSelector(
      getTaskSelectorState,
      state => state.error
);