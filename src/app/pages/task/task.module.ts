import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task/list-task.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffect } from './state/task.effect';


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
    StoreModule.forFeature('task', taskReducer),
    EffectsModule.forFeature([TaskEffect])
  ]
})
export class TaskModule { }
