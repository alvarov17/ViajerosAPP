import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {
  HistorialcomprasPage,
  ModificarPerfilPage
} from "../index.paginas";
import {Geolocation} from '@ionic-native/geolocation';
import {LoginPage} from "../../pages/login/login";
import {AvisoProvider} from "../../providers/index.providers"
import {Aviso} from "../../interfaces/aviso.interface";
import {ServiciosPage} from "../servicios/servicios";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first AGM project';
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation,
              public AviCtrl: AvisoProvider) {
    AviCtrl.mostrarAviso();


  }

  ionViewDidEnter() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(`latitud: ${this.lat} - longitud: ${this.lng}`);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  abrirModificarPerfil() {
    this.navCtrl.push(ModificarPerfilPage);
  }

  Salir() {

    this.navCtrl.setRoot(LoginPage);
    console.log("saliste");

  }

  mostrarHistorial() {
    this.navCtrl.push(HistorialcomprasPage);
  }

  mostrarServicio(aviso: Aviso) {
    this.navCtrl.push(ServiciosPage, {"aviso": aviso});
  }


}
