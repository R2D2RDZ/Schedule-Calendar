import { Injectable } from '@angular/core';
import { Proyecto } from '../Models/Proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyectos: Proyecto[] = [{nombre: "test", descripcionCorta: "test", descripcionLarga: "test", tags: ["Unity"], imagen:"test"},
                                  {nombre: "test2", descripcionCorta: "test2", descripcionLarga: "test2", tags: ["C#"], imagen:"test2"},
                                  {nombre: "test3", descripcionCorta: "test3", descripcionLarga: "test3", tags: ["Unity", "C#"], imagen:"test2"},
                                  {nombre: "test4", descripcionCorta: "test4", descripcionLarga: "test4", tags: ["C#", "Unity"], imagen:"test2"},
                                  {nombre: "test5", descripcionCorta: "test5", descripcionLarga: "test5", tags: ["C#", "JavaScript"], imagen:"test2"},
                                  {nombre: "test6", descripcionCorta: "test6", descripcionLarga: "test6", tags: ["Unity", "Python"], imagen:"test2"},];
  constructor() { }

  public getProyectos(){
    return this.proyectos;
    console.log(this.proyectos);
  }

  public getProyecto(name: string){
    return this.proyectos.find(proyecto => proyecto.nombre == name)
  }
}
