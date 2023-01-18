import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { MiMaterialModule } from '../../shared/mi-material.module';


@NgModule({
  declarations: [
    FormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MiMaterialModule
  ]
})
export class CursosModule { }
