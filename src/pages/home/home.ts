import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModificarPerfilPage} from "../index.paginas";
import {Geolocation} from '@ionic-native/geolocation';
import {LoginPage} from "../../pages/login/login";
import {ServicioProvider} from "../../providers/index.providers"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first AGM project';
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation,
              public ServCtrl: ServicioProvider) {


  }

  ionViewDidEnter() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(`latitud: ${this.lat} - longitud: ${this.lng}`);
      this.ServCtrl.servicios.forEach(value => {
        console.log();
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  abrirModificarPerfil() {
    this.navCtrl.push(ModificarPerfilPage);
  }

  Salir() {

    this.navCtrl.setRoot(LoginPage);

  }


}
