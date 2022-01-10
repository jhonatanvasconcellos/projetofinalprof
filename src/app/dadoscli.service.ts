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

  listDados(){
    return this.firestore.collection('Profissional').snapshotChanges();
  }

  alterar(id,tarefa){
    this.firestore.doc("Profissional/"+id).update(tarefa);
  }

  listarservico(){
    return this.firestore.collection('Chamados').snapshotChanges();
  }
  
  excluir(chamados){
    this.firestore.doc("Chamados/"+chamados.id).delete();
  }
}
