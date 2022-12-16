import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';
import {Cita} from '../Models/Cita.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  citas: Cita[] = [];
  constructor(private citasservice: CitasService) {}

  ngOnInit(){
    this.citas = this.citasservice.getCitas();
    console.log(this.citas);
  }

  log(){
    console.log(this.citas);
  }

}
