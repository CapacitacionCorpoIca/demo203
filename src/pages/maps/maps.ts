import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation, GeolocationOptions, Geoposition } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  map: any;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    let options: GeolocationOptions = {
      timeout: 5000,
      enableHighAccuracy: true,
      maximumAge: 0
    };
    Geolocation.getCurrentPosition( options )
    .then((position: Geoposition) => {
      this.loadMap( position );
    })
  }

  private loadMap(position: Geoposition){
    let mapElement = document.getElementById('map');
    this.map = new google.maps.Map( mapElement,{
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', ()=>{
      mapElement.classList.add('show-map');
      google.maps.event.trigger(mapElement, 'resize');
      this.addMarker(position.coords.latitude, position.coords.longitude);
    })
  }

  private addMarker(latitude: number, longitude: number){
    new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude
      },
      map: this.map,
      title: "Here I'm"
    })
  }

}
