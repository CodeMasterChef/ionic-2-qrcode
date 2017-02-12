import { Component } from '@angular/core';

import { NavController, Platform, AlertController } from 'ionic-angular';

declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform, public alertCtrl: AlertController) {

  }
  scan() {
    this.platform.ready().then(() => {
      cordova.plugins.barcodeScanner.scan((result) => {
        let alert = this.alertCtrl.create({
          title: 'success',
          subTitle: result.text,
          buttons: ['OK']
        });
        alert.present();
      }, (error) => {
        let alert = this.alertCtrl.create({
          title: 'error',
          subTitle: error,
          buttons: ['OK']
        });
        alert.present();
      });
    });
  }
}
