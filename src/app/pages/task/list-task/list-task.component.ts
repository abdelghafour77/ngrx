import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ITask } from '../task.model';
import { TaskState } from '../state/task.reducer';
import { Store } from '@ngrx/store';
import * as TaskSelector from '../state/task.selector'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit{

  tasks: ITask[] = [];

  constructor(private taskService: TaskService,
     private store: Store<TaskState>) {}

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe(data => {
      this.tasks = data;
    });

    this.store.select(TaskSelector.getError).subscribe(data => {
      console.log(data);
      
    })
  }
}
