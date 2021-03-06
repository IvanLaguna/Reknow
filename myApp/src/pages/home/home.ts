import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {
     this.navCtrl.push(LoginPage);
  }      
  register(){
    this.navCtrl.push(RegisterPage);
  }
  prueba(){
    this.navCtrl.push(ProfilePage);
  }
}
