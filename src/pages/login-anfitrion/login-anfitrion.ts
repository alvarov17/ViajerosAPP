import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomeAnfitrionPage, LoginPage} from "../index.paginas";
import {AnfitrionProvider} from "../../providers/index.providers";
import {Anfitrion} from "../../interfaces/anfitrion.interface";


@IonicPage()
@Component({
  selector: 'page-login-anfitrion',
  templateUrl: 'login-anfitrion.html',
})
export class LoginAnfitrionPage {
  email: string = "";
  password: string = "";
  Anf: Anfitrion;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private anfProv: AnfitrionProvider) {
  }


  irLoginCliente() {
    this.navCtrl.setRoot(LoginPage);
  }

  ingresar() {
    this.anfProv.validarAnfitrion(this.email, this.password).subscribe(value => {
      this.navCtrl.setRoot(HomeAnfitrionPage);
    });


  }
}
