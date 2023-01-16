import { Component , OnInit} from '@angular/core';
import { CitasService } from '../services/citas.service';
import {Cita} from '../Models/Cita.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsuarioService } from '../services/usuario.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  public citaForm: FormGroup;

  nameinput: string;

  
  //ncita: Cita = {nombre: "", descripcion: "", fecha: "", horas: 0};

  constructor(
    private citasservice: CitasService, 
    public formBuilder: FormBuilder, 
    private usuarioservice: UsuarioService, 
    private toastcontroller: ToastController,
    private router: Router) {
  }

  ngOnInit(){
    this.citaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      hour: ['', [Validators.required]],
      date: ['', [Validators.required]]
    })
    this.citaForm.patchValue({
      name: this.usuarioservice.getName()
    })
  }

  submitForm(){
    if (!this.citaForm.valid) {
      this.showtoast('Please provide all the required values!');
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.showtoast("Cita creada");
      console.log(this.citaForm.value);
      this.confirm();
      return true;
    }
  }

  confirm(){
    //console.log(this.selectedDate);
    //console.log(this.selectedName);
    /* this.ncita.nombre = this.selectedName ;
    this.ncita.fecha = this.selectedDate;
    this.ncita.descripcion = this.selectedDesc ;
    this.ncita.horas = this.selectedHora; */
    this.citasservice.addCita({nombre: this.citaForm.value.name, descripcion: this.citaForm.value.desc, fecha: this.citaForm.value.date, horas: this.citaForm.value.hour, email: this.usuarioservice.getEmail()});
    console.log(this.citasservice.getCitas());
    this.router.navigate(["/tabs"]);
  }

  async showtoast(mensaje: string){
    const toast = this.toastcontroller.create({
      message: mensaje,
      position: "bottom",
      duration: 1500
    });
    (await toast).present();
  }

}
