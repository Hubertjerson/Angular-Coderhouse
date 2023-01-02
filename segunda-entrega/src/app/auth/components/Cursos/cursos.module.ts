import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { FormCursoComponent } from './pages/form-curso/form-curso.component';
import { ListCursoComponent } from './pages/list-curso/list-curso.component';

import { RouterModule } from '@angular/router';
import { MyMaterialModule } from 'src/app/modules/my-material.module';


@NgModule({
  declarations: [
    FormCursoComponent,
    ListCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    RouterModule,
    MyMaterialModule
  ]
})
export class CursosModule { }
