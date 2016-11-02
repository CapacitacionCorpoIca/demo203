import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { InputsPage } from '../pages/inputs/inputs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = HomePage;
  pages: any[] = [];

  constructor(platform: Platform) {
    //Agregar una pagina
    this.pages.push({
      title: 'Home',
      icon: 'home',
      component: HomePage,
      count: 0
    });
    //Agregar alert page
    this.pages.push({
      title: 'Alerts',
      icon: 'star',
      component: AlertPage,
      count: 45
    });
    //Agregar inputs page
    this.pages.push({
      title: 'Inputs',
      icon: 'logo-tux',
      component: InputsPage,
      count: 3
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goToPage(component){
    this.rootPage = component;
  }
}
