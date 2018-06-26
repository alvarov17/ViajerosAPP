import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModificarPerfilPage } from "../modificar-perfil/modificar-perfil";
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first AGM project';
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  ionViewDidEnter(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(`latitud: ${this.lat} - longitud: ${this.lng}`);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  abrirModificarPerfil(){
    this.navCtrl.push(ModificarPerfilPage);
  }



}
