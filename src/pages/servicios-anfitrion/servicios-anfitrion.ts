import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Aviso} from "../../interfaces/aviso.interface";


@IonicPage()
@Component({
  selector: 'page-servicios-anfitrion',
  templateUrl: 'servicios-anfitrion.html',
})
export class ServiciosAnfitrionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosAnfitrionPage');
  }

}
