import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from 'ionic-native';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  photo: string = null;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CameraPage Page');
  }

  takePicture(){
    let options: CameraOptions = {
      destinationType: Camera.DestinationType.DATA_URL, //Base 64
      targetHeight: 1000,
      targetWidth: 1000,
      quality: 100,
      cameraDirection: Camera.Direction.FRONT,
      allowEdit: true
    };
    Camera.getPicture( options )
    .then( picture => {
      this.photo = 'data:image/jpeg;base64,' + picture;
    })
  }

}
