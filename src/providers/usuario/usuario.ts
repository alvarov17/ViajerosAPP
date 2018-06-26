import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UsuarioProvider {


  constructor(private db: AngularFirestore) {
    console.log('Hello UsuarioProvider Provider');

  }

  getUsuario() {

    return new Promise((resolve, reject) => {

      this.db.collection('usuarios').doc('miUsuario').valueChanges().subscribe(data => {
        if (data){
          console.log(data);
          resolve;
        } else {
          console.log("Error");
          reject;
        }
      });

    });


  }

}
