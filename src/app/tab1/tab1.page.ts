import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';
import {Cita} from '../Models/Cita.model';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  citas: Cita[] = [];
  constructor(private citasservice: CitasService, private usuarioservice: UsuarioService, private router: Router) {}

  ngOnInit(){
    if (this.usuarioservice.getEmail() == "r2d2rdz.secenas@gmail.com")
    this.citasservice.getCitas().subscribe(citas => this.citas = citas);
    else
    this.citasservice.getUserCitas().subscribe(citas => this.citas = citas);
    console.log(this.citas);
    console.log(this.usuarioservice.getUser()); 
    console.log(this.usuarioservice.getEmail()); 
    console.log(this.usuarioservice.getName()); 
  }

  log(){
    console.log(this.citas);
  }

  Logout(){
    console.log("Logged out")
    this.usuarioservice.logout()
    .then(()=>{
      console.log("Logged out")
      this.router.navigate(["/login"])
    })
    .catch(error => console.log(error));
  }
}
