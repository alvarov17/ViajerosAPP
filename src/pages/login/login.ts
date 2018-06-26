import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { RegistroPage } from "../registro/registro";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuProv : UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ingresar(){
    //this.usuProv.getUsuario();
    this.navCtrl.setRoot(HomePage);

  }

  abrirRegistro(){

    this.navCtrl.push(RegistroPage);
  }

}
