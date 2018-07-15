import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ClienteProvider } from "../../providers/index.providers";
import {LoginAnfitrionPage, RegistroPage} from "../index.paginas";
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

  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public CliProv : ClienteProvider) {
  }

  ingresar(){

    this.CliProv.validarCliente(this.email, this.password)
                .subscribe( ()=> this.navCtrl.setRoot(HomePage) );


  }

  abrirRegistro(){

    this.navCtrl.push(RegistroPage);
  }
  irLoginAnfitrion(){
    this.navCtrl.setRoot(LoginAnfitrionPage);
  }

}
