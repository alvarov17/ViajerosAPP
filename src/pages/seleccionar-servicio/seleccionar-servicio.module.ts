import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionarServicioPage } from './seleccionar-servicio';

@NgModule({
  declarations: [
    SeleccionarServicioPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionarServicioPage),
  ],
})
export class SeleccionarServicioPageModule {}
