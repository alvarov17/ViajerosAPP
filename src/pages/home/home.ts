import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModificarPerfilPage } from "../index.paginas";
import { Geolocation } from '@ionic-native/geolocation';
import { LoginPage } from "../../pages/login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first AGM project';
  lat: number;
  lng: number;
  private icon: {
    url: '../../assets/imgs/casaroja.png',
    scaledSize: {
      height: 40,
      width: 20
    }
  };

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

 Salir(){

  this.navCtrl.setRoot(LoginPage);
//  setTimeout(() => {

//   this.navCtrl.setRoot(LoginPage);
//   console.log("saliste");

// }, 2000);

 //goToRoot

 }

}
