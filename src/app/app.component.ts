import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-project';
  respuesta="Escriba su respuesta aquí";
  estado="false";

  getTitle(){
    return this.title;
  }
}
