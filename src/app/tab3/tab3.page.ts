import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../Models/Proyecto.model';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  projects: Proyecto[];
  tags: string[] = ["All", "Unity","C#","JavaScript","Python"];
  selectedtag: string = "All";
  filter: any;
  constructor(private proyectosservice: ProyectosService) {}

  ngOnInit(){
    this.projects = this.proyectosservice.getProyectos();
    console.log(this.projects);
  }
}

//*ngIf= "project.tags.includes(selectedtag)"
