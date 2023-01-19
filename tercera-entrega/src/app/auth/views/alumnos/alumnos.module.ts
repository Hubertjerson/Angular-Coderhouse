import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { MiMaterialModule } from '../../shared/mi-material.module';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    FormComponent,
    ListaComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MiMaterialModule
  ]
})
export class AlumnosModule { }
