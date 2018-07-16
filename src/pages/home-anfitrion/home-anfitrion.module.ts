import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAnfitrionPage } from './home-anfitrion';

@NgModule({
  declarations: [
    HomeAnfitrionPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAnfitrionPage),
  ],
})
export class HomeAnfitrionPageModule {}
