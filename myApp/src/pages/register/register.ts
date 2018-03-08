import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('usernameReg') uname;
  @ViewChild('passwordReg') pword;
  @ViewChild('confPasswordReg') confPword;
  @ViewChild('emailReg') email;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    if (this.uname.value != '' && this.pword.value == 'admin'){
 
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
