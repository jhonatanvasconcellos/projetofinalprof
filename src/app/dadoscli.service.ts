import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DadoscliService {

  constructor(private firestore: AngularFirestore) { }

  incluirBD(prof){
    console.log(prof);
    /*delete prof.senha;*/
    console.log(prof);
    
    this.firestore.collection('Profissional').add(prof);
  }
}
