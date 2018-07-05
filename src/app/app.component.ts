import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { FiltroServiciosPage } from "../pages/filtro-servicios/filtro-servicios";
import { ServiciosAnfitrionPage } from "../pages/servicios-anfitrion/servicios-anfitrion";
import { HistorialcomprasPage } from "../pages/historialcompras/historialcompras";
import { MetodopagoPage } from "../pages/metodopago/metodopago";
import { ValorarAnfitrionPage } from "../pages/valorar-anfitrion/valorar-anfitrion";
import { ContratarServicioPage } from "../pages/contratar-servicio/contratar-servicio";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = ContratarServicioPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
