import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('Hello Alert Page');
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Ocurrio un problema',
      subTitle: 'lo sentimos',
      buttons: ['Aceptar']
    })

    alert.present();
  }

  showPrompt(){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'escribe le nombre de la tarea',
      inputs: [
        {
          name: 'task',
          placeholder: 'Digitar nueva tarea.'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{
            console.log( data );
          }
        }
      ]
    });
    alert.present();
  }

  showConfirmation(){
    let alert = this.alertCtrl.create({
      title: '¿Estas seguro de borrar?',
      message: 'Si se borra no los podras recuperar',
      buttons: [
        {
          text: 'cancelar',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'si estoy seguro',
          handler: () => {
            console.log('si');
          }
        }
      ]
    });
    alert.present();
  }

}
