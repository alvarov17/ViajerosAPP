import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { ModificarPerfilPage } from "../pages/modificar-perfil/modificar-perfil";
import { RegistroPage } from "../pages/registro/registro";
import { FiltroServiciosPage } from "../pages/filtro-servicios/filtro-servicios";
import { ServiciosAnfitrionPage } from "../pages/servicios-anfitrion/servicios-anfitrion";
import { HistorialcomprasPage } from "../pages/historialcompras/historialcompras";
import { MetodopagoPage } from "../pages/metodopago/metodopago";
import { ValorarAnfitrionPage } from "../pages/valorar-anfitrion/valorar-anfitrion";
import { ContratarServicioPage } from "../pages/contratar-servicio/contratar-servicio";
//googlemaps
import { AgmCoreModule } from '@agm/core';

//geolocalizacion
import { Geolocation } from '@ionic-native/geolocation';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from "../conf/firebase.config";
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ModificarPerfilPage,
    RegistroPage,
    FiltroServiciosPage,
    ServiciosAnfitrionPage,
    HistorialcomprasPage,
    MetodopagoPage,
    ValorarAnfitrionPage,
    ContratarServicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ModificarPerfilPage,
    RegistroPage,
    FiltroServiciosPage,
    ServiciosAnfitrionPage,
    HistorialcomprasPage,
    MetodopagoPage,
    ValorarAnfitrionPage,
    ContratarServicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    UsuarioProvider
  ]
})
export class AppModule {}
