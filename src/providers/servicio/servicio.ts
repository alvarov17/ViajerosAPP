import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Servicio} from "../../interfaces/servicio.interfaz";

import {URL_SERVICIOS} from "../../conf/url.servicios";

@Injectable()
export class ServicioProvider {

  public servicios: Servicio[] = [];

  constructor(public http: HttpClient) {
    this.mostrarServicio();
  }

  mostrarServicio() {

    let url = URL_SERVICIOS + "servicio/obtenerservicio";

    this.http.get(url).map(response => {

    });


  }

}
