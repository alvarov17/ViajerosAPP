import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarPerfilPage } from './modificar-perfil';

@NgModule({
  declarations: [
    ModificarPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarPerfilPage),
  ],
})
export class ModificarPerfilPageModule {}
