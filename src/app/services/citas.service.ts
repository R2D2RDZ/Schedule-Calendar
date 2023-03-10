import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import {Cita} from '../Models/Cita.model';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: Cita[]= [];
  constructor(private firestore: Firestore, private usuarioservice: UsuarioService) {
    this.getCitas().subscribe(citas => this.citas = citas);
   }

  public addCita(date: Cita){
    this.citas.push(date);
    console.log(this.citas);
    const citasref = collection(this.firestore,"Citas")
    return addDoc(citasref, date)
  }

  public getCitas(): Observable<Cita[]>{
    //return this.citas;
    const citasref = collection(this.firestore,"Citas")
    return collectionData(citasref, { idField: "id"}) as Observable<Cita[]>
  }

  public getUserCitas(){
    const citasref = collection(this.firestore,"Citas")
    const queryref = query(citasref, where("email", "==", this.usuarioservice.getEmail()))
    return collectionData(queryref, { idField: "id"}) as Observable<Cita[]>
  }

  public getCita(date: string){
    return this.citas.find(cita => cita.fecha == date)
  }
}
