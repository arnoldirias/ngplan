import { Component } from '@angular/core';

@Component({
  selector: 'app-asignatures',
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.css']
})
export class AsignaturesComponent {

  asignaturas = [
    {
      codigo: "IS110",
      nombre: "INTRODUCCION A LA ING",
      uv: 3
    },
    {
      codigo: "IS210",
      nombre: "PROGRAMACION II",
      uv: 4
    },
    {
      codigo: "IS300",
      nombre: "BASE DE DATOS I",
      uv: 5
    },
    {
      codigo: "IS400",
      nombre: "LENGUAJES DE PROGRAMACION",
      uv: 4
    },
    {
      codigo: "IS500",
      nombre: "ANALISIS Y DISEÑO DE SOFTWARE",
      uv: 3
    },
    {
      codigo: "IS910",
      nombre: "SISTEMAS EXPERTOS",
      uv: 3
    }
  ]
}
