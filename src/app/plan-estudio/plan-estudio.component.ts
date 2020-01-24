import { Component, OnInit, Input } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})
export class PlanEstudioComponent implements OnInit {

  @Input() datos;

  constructor() { }

  ngOnInit() {
  }

}
