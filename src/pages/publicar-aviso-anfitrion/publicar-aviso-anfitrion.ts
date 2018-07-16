import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {MenuDiarioAnfitrionPage} from '../menu-diario-anfitrion/menu-diario-anfitrion';
import {NativeGeocoder} from "@ionic-native/native-geocoder";

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-publicar-aviso-anfitrion',
  templateUrl: 'publicar-aviso-anfitrion.html',
})
export class PublicarAvisoAnfitrionPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public geocoder: NativeGeocoder, public platform: Platform) {
    if (this.platform.is('cordova')) {
      this.geocoder.forwardGeocode("gamero 580")
        .then(value => console.log(value[0].latitude + value[0].longitude),
          reason => console.log(reason))
    } else {

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarAvisoAnfitrionPage');
    this.slides.paginationType = 'progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }


  avanzarSlide(){
    this.slides.lockSwipes(false);
    this.slides.freeMode = true;
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }

}
