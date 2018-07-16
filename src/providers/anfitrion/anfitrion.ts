import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Anfitrion, RootObject} from "../../interfaces/anfitrion.interface";
import {URL_SERVICIOS} from "../../conf/url.servicios";

/*
  Generated class for the AnfitrionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnfitrionProvider {

  anf: Anfitrion;

  constructor(public http: HttpClient) {
    console.log('Hello AnfitrionProvider Provider');
  }

  validarAnfitrion(email: string, password: string) {
    let url = URL_SERVICIOS + "anfitrion/login";
    return this.http.post<RootObject>(url, {email, password}).map(value => {

      if(value.error){
      }else {
        this.anf = value.anfitrion;
      }
    })
  }
}
