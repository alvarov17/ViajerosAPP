import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../../conf/url.servicios";
import { HttpClient } from "@angular/common/http";
import { AlertController, NavController } from "ionic-angular";
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioProvider {

  id_usuario: string;


  constructor(public http: HttpClient,
              private alertCtrl: AlertController) {
    console.log('Hello Usuario Provider');

  }

  validarUsuario( correo:string, password:string ) {

    let url = URL_SERVICIOS + "usuario/validarusuario";

    return this.http.post( url, {correo, password} ).map(resp => {
      let data_resp = resp;
      console.log(data_resp);

      if (data_resp['error']){
        this.alertCtrl.create({
          title: "Error al iniciar",
          subTitle: data_resp['mensaje'],
          buttons: ["OK"]
        }).present();

      } else {
          this.id_usuario = data_resp['id_usuario'];
      }
    });

  }

}
