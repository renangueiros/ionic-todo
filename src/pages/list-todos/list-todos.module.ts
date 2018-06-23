import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTodosPage } from './list-todos';

@NgModule({
  declarations: [
    ListTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTodosPage),
  ],
})
export class ListTodosPageModule {}
