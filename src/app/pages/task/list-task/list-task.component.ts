import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ITask } from '../task.model';
import { TaskState } from '../state/task.reducer';
import { Store } from '@ngrx/store';
import * as TaskSelector from '../state/task.selector'
import * as TaskActions from '../state/task.action'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit{

  tasks: ITask[] = [];

  constructor(private store: Store<TaskState>) {}

  ngOnInit(): void {

    this.store.dispatch(TaskActions.loadTasks());

    this.store.select(TaskSelector.getTasks).subscribe(tasks => {
      this.tasks = tasks;
    })

    this.store.select(TaskSelector.getError).subscribe(data => {
      console.log(data);
    })
  }
}
