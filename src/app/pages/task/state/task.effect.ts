import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../service/task.service";
import { EMPTY, catchError, map, mergeMap, withLatestFrom } from "rxjs";
import { TaskState } from "./task.reducer";
import { Store, select } from "@ngrx/store";
import * as TaskActions from './task.action';
import * as TaskSelector from './task.selector';


@Injectable()
export class TaskEffect {

      constructor(private actions$: Actions,
            private taskService: TaskService,
            private store: Store<TaskState>
            ) {}

      
      loadTasks$ = createEffect(()=> {
            return this.actions$.pipe(
                  ofType(TaskActions.loadTasks),
                  withLatestFrom(this.store.pipe(select(TaskSelector.getTasks))),
                  mergeMap(([action, tasks]) => {
                        if(tasks.length > 0) {
                              return EMPTY;
                        }
                        else
                        return this.taskService.getTaskList()
                              .pipe(
                                    map(tasks => TaskActions.loadTasksSuccess({tasks})),
                                    //catchError(error => of(TaskActions.loadTasksFailure({error})))
                              )
                  })
            )
      })
}