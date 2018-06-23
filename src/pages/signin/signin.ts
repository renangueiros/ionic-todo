import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth, formBuilder: FormBuilder) {
    this.signinForm = formBuilder.group({
      email: "",
      password: ""
    });
  }

  signin() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.signinForm.value.email, this.signinForm.value.password).then(() => {
      this.navCtrl.push('ListTodosPage');
    });
  }

  navToSignupPage() {
    this.navCtrl.push("SignupPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
