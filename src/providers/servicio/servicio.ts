import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio, RootObject } from "../../interfaces/servicio.interface";
import {URL_SERVICIOS} from "../../conf/url.servicios";


@Injectable()
export class ServicioProvider {


  constructor(public http: HttpClient) {
    console.log('Hello ServicioProvider Provider');
  }

  public mostrarServicios(id: any){
    let url = URL_SERVICIOS + "servicio/obtener/"+id;
    return this.http.get<RootObject>(url)
      .subscribe(value => {
        console.log(value);
      });
  }



}
