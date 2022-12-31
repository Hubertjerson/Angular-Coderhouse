import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromAlumnosComponent } from './components/from-alumnos/from-alumnos.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { RouterModule } from '@angular/router';
import { AlumnosRoutingModule } from './alumnos-routing.module';



@NgModule({
  declarations: [
    FromAlumnosComponent,
    ListAlumnosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
