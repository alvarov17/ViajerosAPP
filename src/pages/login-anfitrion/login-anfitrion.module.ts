import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAnfitrionPage } from './login-anfitrion';

@NgModule({
  declarations: [
    LoginAnfitrionPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAnfitrionPage),
  ],
})
export class LoginAnfitrionPageModule {}
