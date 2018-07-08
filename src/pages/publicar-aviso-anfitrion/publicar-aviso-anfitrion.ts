import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuDiarioAnfitrionPage } from '../menu-diario-anfitrion/menu-diario-anfitrion';

/**
 * Generated class for the PublicarAvisoAnfitrionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicar-aviso-anfitrion',
  templateUrl: 'publicar-aviso-anfitrion.html',
})
export class PublicarAvisoAnfitrionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarAvisoAnfitrionPage');
  }

  GenerarMenu(){

    this.navCtrl.push(MenuDiarioAnfitrionPage);
  }

}
