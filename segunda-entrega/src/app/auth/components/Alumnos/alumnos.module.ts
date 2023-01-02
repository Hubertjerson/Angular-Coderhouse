import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { FormAlumnosComponent } from './pages/form-alumnos/form-alumnos.component';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from '../../../modules/my-material.module';
import { ListAlumnosComponent } from './pages/list-alumnos/list-alumnos.component';



@NgModule({
  declarations: [
    FormAlumnosComponent,
    ListAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    RouterModule,
    MyMaterialModule,
  ]
})
export class AlumnosModule { }
