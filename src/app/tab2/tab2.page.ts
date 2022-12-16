import { Component } from '@angular/core';
import { CitasService } from '../services/citas.service';
import {Cita} from '../Models/Cita.model';
import { format } from 'path';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public selectedDate: string="";
  public selectedName: string="";
  public selectedDesc: string="";
  public selectedHora: number=0;
  ncita: Cita = {nombre: "", descripcion: "", fecha: "", horas: 0};

  constructor(private citasservice: CitasService) {}

  confirm(){
    //console.log(this.selectedDate);
    //console.log(this.selectedName);
    this.ncita.nombre = this.selectedName ;
    this.ncita.fecha = this.selectedDate;
    this.ncita.descripcion = this.selectedDesc ;
    this.ncita.horas = this.selectedHora;
    this.citasservice.addCita(this.ncita);
    
  }

}
