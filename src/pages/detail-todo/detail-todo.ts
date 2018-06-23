import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'

@IonicPage()
@Component({
  selector: 'page-detail-todo',
  templateUrl: 'detail-todo.html',
})
export class DetailTodoPage {

  result: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firestore: AngularFirestore, public fireAuth: AngularFireAuth) {
    const id = this.fireAuth.auth.currentUser.uid;
    this.result = firestore.collection(id, ref => ref.where('todo', '==', this.navParams.get("todo"))).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTodoPage');
  }

}
