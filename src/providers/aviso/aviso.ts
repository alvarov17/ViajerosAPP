import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RootObject, Aviso, RootObjectAnf, AvisoAnf} from "../../interfaces/aviso.interface";

import {URL_SERVICIOS} from "../../conf/url.servicios";

@Injectable()
export class AvisoProvider {

  public avisos: Aviso[] = [];
  public avisoAnf = {} as AvisoAnf;
  public error: boolean;

  constructor(public http: HttpClient) {

  }

  mostrarAviso() {

    let url = URL_SERVICIOS + "aviso/obtenertodos";

    this.http.get<RootObject>(url)
      .subscribe(value => {
        console.log(value);
        this.avisos = value.avisos;
      })
  }

  mostrarAvisosActivos(id: any) {

    let url = URL_SERVICIOS + "aviso/publicados/" + id;

    return this.http.get<RootObjectAnf>(url)
      .subscribe(data => {
        this.avisoAnf = data.aviso;
        this.error = data.error;
        console.log(data.aviso);
        console.log(data.error)
      });
    ;

  }

}
