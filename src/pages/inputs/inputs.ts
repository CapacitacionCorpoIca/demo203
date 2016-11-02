import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { OptionsPage } from '../options/options';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {

  cities: any[] = [];
  nationalities: any[] = [];
  series: any[] = [];

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController
  ) {
    this.cities.push({
      title: 'Santiago, Chile'
    })

    this.cities.push({
      title: 'Cali, Colombia'
    })

    this.cities.push({
      title: 'Ica, Peru'
    })

    this.cities.push({
      title: 'Cbba, Bolivia'
    })

    this.nationalities.push({
      title: 'Colombiana',
      value: 'COL'
    });

    this.nationalities.push({
      title: 'Boliviana',
      value: 'BOL'
    });

    this.nationalities.push({
      title: 'Peruana',
      value: 'PER'
    });

    this.series.push({
      title: 'Mr Robot',
      value: 'robot'
    });

    this.series.push({
      title: 'Silicon valley',
      value: 'valley'
    });

    this.series.push({
      title: 'Games of thrones',
      value: 'thrones'
    });

    this.series.push({
      title: 'The simpsons',
      value: 'simpsons'
    });
  }

  ionViewDidLoad() {
    console.log('Hello Inputs Page');
  }

  showPopover(event){
    let popover = this.popoverCtrl.create( OptionsPage );
    popover.present({
      ev: event
    });
  }

}
