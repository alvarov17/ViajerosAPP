import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {MyApp} from './app.component';

//paginas
import {
  HomePage, LoginPage, ModificarPerfilPage, RegistroPage,
  FiltroServiciosPage, ServiciosAnfitrionPage,
  ContratarServicioPage, HistorialcomprasPage,
  MetodopagoPage, ValorarAnfitrionPage, VistaPrincipalAnfitrionPage, ModificarPerfilAnfitrionPage
  , PublicarAvisoAnfitrionPage, MenuDiarioAnfitrionPage, ServiciosPage
} from "../pages/index.paginas";

//pipes
import {PipesModule} from "../pipes/pipes.module";

//googlemaps
import {AgmCoreModule} from '@agm/core';

//geolocalizacion
import {Geolocation} from '@ionic-native/geolocation';

//providers
import {UsuarioProvider, AvisoProvider, ServicioProvider} from '../providers/index.providers';

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
    MenuDiarioAnfitrionPage,
    ServiciosPage
  ],
  imports: [
    BrowserModule,
    PipesModule,
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
    MenuDiarioAnfitrionPage,
    ServiciosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    UsuarioProvider,
    AvisoProvider,
    ServicioProvider
  ]
})
export class AppModule {
}
