import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AnfitrionProvider, AvisoProvider} from "../../providers/index.providers";


@IonicPage()
@Component({
  selector: 'page-home-anfitrion',
  templateUrl: 'home-anfitrion.html',
})
export class HomeAnfitrionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public anfProv: AnfitrionProvider, public aviProv: AvisoProvider) {
    this.aviProv.mostrarAvisosActivos(this.anfProv.anf.anf_id);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAnfitrionPage');
  }

}
