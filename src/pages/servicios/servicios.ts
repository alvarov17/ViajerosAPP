import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Aviso} from "../../interfaces/aviso.interface";
import {ServicioProvider} from "../../providers/servicio/servicio";

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {

  private aviso: Aviso;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private servProv: ServicioProvider) {
    this.aviso = navParams.get('aviso');
    this.servProv.mostrarServicios(this.aviso.avi_id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }

}
