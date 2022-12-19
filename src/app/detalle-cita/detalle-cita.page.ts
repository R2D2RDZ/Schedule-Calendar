import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../Models/Cita.model';
import { CitasService } from '../services/citas.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.page.html',
  styleUrls: ['./detalle-cita.page.scss'],
})
export class DetalleCitaPage implements OnInit {

  fecha: string;
  cita: Cita;

  constructor(private citaService:CitasService, private router: Router, private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap=>{
      this.fecha = paramMap.get('fecha') as string;
      let cit = this.citaService.getCita(this.fecha);
      if (cit){
        this.cita = cit;
      }
      console.log(this.cita);
    });
  }

}
