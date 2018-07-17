import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {NativeGeocoder, NativeGeocoderForwardResult} from "@ionic-native/native-geocoder";

@Injectable()
export class GeocoderProvider {

  constructor(public http: HttpClient, public _GEOCODE: NativeGeocoder) {
    console.log('Hello GeocoderProvider Provider');
  }

  obtenerCoordenadas(direccion : string) : Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this._GEOCODE.forwardGeocode(direccion)
        .then((coordinates : NativeGeocoderForwardResult[]) =>
        {
          let str : string   = `The coordinates are latitude=${coordinates[0].latitude} and longitude=${coordinates[0].longitude}`;
          resolve(str);
        })
        .catch((error: any) =>
        {
          reject(error);
        });
    });
  }

}
