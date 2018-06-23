import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-list-todos',
  templateUrl: 'list-todos.html',
})
export class ListTodosPage {

  todoList: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth, public firestore: AngularFirestore) {
    const id = this.fireAuth.auth.currentUser.uid;

    this.todoList = this.firestore.collection(id).valueChanges();
  }

  addTodo() {
    this.navCtrl.push('AddTodoPage');
  }

  todoDetails(todo: string) {
    this.navCtrl.push('DetailTodoPage', { todo: todo });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTodosPage');
  }

}
