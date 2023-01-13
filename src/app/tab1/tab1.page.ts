import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';
import {Cita} from '../Models/Cita.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  citas: Cita[] = [];
  constructor(private citasservice: CitasService, private usuarioservice: UsuarioService) {}

  ngOnInit(){
    this.citasservice.getCitas().subscribe(citas => this.citas = citas);
    console.log(this.citas);
  }

  log(){
    console.log(this.citas);
  }

  Logout(){
    console.log("Logged out")
    this.usuarioservice.logout()
    .then(()=>console.log("Logged out"))
    .catch(error => console.log(error));
  }
}
