import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {
  
cambiarValor=true;

datos={
  nombre: "Javier Castillo",
  numCuenta: "20101010000",
  carrera: "Ingeniería en Sistemas",
  codPlanEstudios: "IS",
  numAsignaturas: "56",
  totalUV: "310"
};

getCarrera(){
  return this.datos.carrera;
}

}
