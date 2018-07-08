import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModificarPerfilAnfitrionPage } from "../modificar-perfil-anfitrion/modificar-perfil-anfitrion";
import { PublicarAvisoAnfitrionPage } from "../publicar-aviso-anfitrion/publicar-aviso-anfitrion";





@IonicPage()
@Component({
  selector: 'page-vista-principal-anfitrion',
  templateUrl: 'vista-principal-anfitrion.html',
})
export class VistaPrincipalAnfitrionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaPrincipalAnfitrionPage');
  }

ModificarPerfilAnfitrion(){
  this.navCtrl.push(ModificarPerfilAnfitrionPage);
}

PublicarAviso(){

  this.navCtrl.push(PublicarAvisoAnfitrionPage);
}

}
