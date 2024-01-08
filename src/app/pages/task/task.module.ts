import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task/list-task.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task.reducer';


const routes: Routes = [
  { path: '', component: ListTaskComponent }
];


@NgModule({
  declarations: [
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('task', taskReducer)
  ]
})
export class TaskModule { }
