import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { MiMaterialModule } from '../../shared/mi-material.module';
import { AlumnosComponent } from './alumnos.component';



@NgModule({
  declarations: [
    FormComponent,
    ListaComponent,
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MiMaterialModule,
  ]
})
export class AlumnosModule { }
