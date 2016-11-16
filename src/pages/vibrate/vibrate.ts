import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Vibration } from 'ionic-native';

@Component({
  selector: 'page-vibrate',
  templateUrl: 'vibrate.html'
})
export class VibratePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VibratePage Page');
  }

  vibrate(){
    Vibration.vibrate([1000,2000,500,3000]);
  }

}
