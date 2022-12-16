import { Injectable } from '@angular/core';
import {Cita} from '../Models/Cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: Cita[]= [];
  constructor() { }

  public addCita(date: Cita){
    this.citas.push(date);
    console.log(this.citas);
  }

  public getCitas(){
    return this.citas;
  }
}
