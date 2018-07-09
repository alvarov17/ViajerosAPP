import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModificarPerfilAnfitrionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificar-perfil-anfitrion',
  templateUrl: 'modificar-perfil-anfitrion.html',
})
export class ModificarPerfilAnfitrionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarPerfilAnfitrionPage');
  }

}
