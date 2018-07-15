import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RootObject, Aviso} from "../../interfaces/aviso.interface";

import {URL_SERVICIOS} from "../../conf/url.servicios";

@Injectable()
export class AvisoProvider {

  public avisos: Aviso[] = [];

  constructor(public http: HttpClient) {
    this.mostrarAviso();
  }

  mostrarAviso() {

    let url = URL_SERVICIOS + "aviso/obtener";

    this.http.get<RootObject>(url)
      .subscribe(value => {
        console.log(value)
        this.avisos = value.avisos
      })
  }

}
