import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignaturesComponent } from './asignatures/asignatures.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { PlanEstudioComponent } from './plan-estudio/plan-estudio.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignaturesComponent,
    MiperfilComponent,
    PlanEstudioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, MiperfilComponent]
})
export class AppModule { }
