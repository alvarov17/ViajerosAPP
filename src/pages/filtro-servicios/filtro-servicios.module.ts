import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltroServiciosPage } from './filtro-servicios';

@NgModule({
  declarations: [
    FiltroServiciosPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltroServiciosPage),
  ],
})
export class FiltroServiciosPageModule {}
