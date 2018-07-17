import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';

import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {AvisoAnf} from "../../interfaces/aviso.interface";
import {GeocoderProvider} from "../../providers/geocoder/geocoder";

@IonicPage()
@Component({
  selector: 'page-publicar-aviso-anfitrion',
  templateUrl: 'publicar-aviso-anfitrion.html',
})
export class PublicarAvisoAnfitrionPage {

  @ViewChild(Slides) slides: Slides;

  aviso = {} as AvisoAnf;
  direccion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform, public _GEOCODE: GeocoderProvider,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarAvisoAnfitrionPage');
    this.slides.paginationType = 'progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }


  avanzarSlide() {
    this.slides.lockSwipes(false);
    this.slides.freeMode = true;
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }

  ingresarDireccion(direccion: string){

    this._GEOCODE.obtenerCoordenadas(this.direccion)
      .then(coordenadas => {
        this.aviso.avi_lat = coordenadas[0].latitude;
        this.aviso.avi_lng = coordenadas[0].longitude;
        this.avanzarSlide();
      })
      .catch(error => {
        let alert = this.alertCtrl.create({
          title: 'Direccion invalida',
          message: 'La dirección no existe',
          buttons: [{text: 'OK'}]
        });
        alert.present();


      });

  }

}
