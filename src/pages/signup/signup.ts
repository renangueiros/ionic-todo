import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth, formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      email: "",
      password: ""
    });
  }

  signup() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password).then(() => {
      this.navCtrl.push('ListTodosPage');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
