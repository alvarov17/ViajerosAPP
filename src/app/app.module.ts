import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';

//paginas
import {  HomePage, LoginPage, ModificarPerfilPage, RegistroPage,
          FiltroServiciosPage, ServiciosAnfitrionPage,
          ContratarServicioPage, HistorialcomprasPage,
          MetodopagoPage, ValorarAnfitrionPage, VistaPrincipalAnfitrionPage, ModificarPerfilAnfitrionPage
        ,PublicarAvisoAnfitrionPage, MenuDiarioAnfitrionPage } from "../pages/index.paginas";


//googlemaps
import { AgmCoreModule } from '@agm/core';

//geolocalizacion
import { Geolocation } from '@ionic-native/geolocation';

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
    ContratarServicioPage,
    VistaPrincipalAnfitrionPage,
    ModificarPerfilAnfitrionPage,
    PublicarAvisoAnfitrionPage,
    MenuDiarioAnfitrionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    }),
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
    ContratarServicioPage,
    VistaPrincipalAnfitrionPage,
    ModificarPerfilAnfitrionPage,
    PublicarAvisoAnfitrionPage,
    MenuDiarioAnfitrionPage

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
