import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}
  
  signInUser(){
    if (this.uname.value == 'admin' && this.pword.value == 'admin'){
 
        let alert = this.alertCtrl.create({
          title: 'Login Correct',
          buttons: ['OK']
        });
        alert.present();

    } else {

      let alert = this.alertCtrl.create({
        title: 'Login Incorrect',
        subTitle: '',
        buttons: ['OK']
      });
      alert.present();

    }
  }
}
