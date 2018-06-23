import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTodoPage } from './detail-todo';

@NgModule({
  declarations: [
    DetailTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTodoPage),
  ],
})
export class DetailTodoPageModule {}
