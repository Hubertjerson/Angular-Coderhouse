import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { MiMaterialModule } from '../../shared/mi-material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlumnosRoutingModule,
    MiMaterialModule,
  ]
})
export class AlumnosModule { }
