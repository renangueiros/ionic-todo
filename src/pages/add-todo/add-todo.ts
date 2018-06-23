import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {

  newTodoForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth, formBuilder: FormBuilder, public firestore: AngularFirestore) {
    this.newTodoForm = formBuilder.group({
      todo: "",
      description: ""
    });
  }

  newTodo() {
    const id = this.fireAuth.auth.currentUser.uid;

    this.firestore.collection(id).add({
      todo: this.newTodoForm.value.todo,
      description: this.newTodoForm.value.description
    }).then(() => {
      this.navCtrl.pop();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTodoPage');
  }

}
