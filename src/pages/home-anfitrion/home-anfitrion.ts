import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AnfitrionProvider, AvisoProvider} from "../../providers/index.providers";
import {PublicarAvisoAnfitrionPage} from "../publicar-aviso-anfitrion/publicar-aviso-anfitrion";


@IonicPage()
@Component({
  selector: 'page-home-anfitrion',
  templateUrl: 'home-anfitrion.html',
})
export class HomeAnfitrionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public anfProv: AnfitrionProvider, public aviProv: AvisoProvider,
              public alertCtrl: AlertController) {
    this.aviProv.mostrarAvisosActivos(this.anfProv.anf.anf_id);

    if (aviProv.error) {
      this.alertaSinAviso();
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAnfitrionPage');
  }

  alertaSinAviso(){
    this.alertCtrl.create({
      title: 'No tienes avisos!',
      subTitle: 'Aun no haz creado tu aviso',
      buttons: ['OK']
    }).present();
  }

  publicarAviso(){
    this.navCtrl.push(PublicarAvisoAnfitrionPage);
  }

}
