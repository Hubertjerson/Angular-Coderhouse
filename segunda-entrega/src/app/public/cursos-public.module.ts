import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosPublicRoutingModule } from './cursos-public-routing.module';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from '../modules/my-material.module';
import { PublicCursoComponent } from './pages/public-curso/public-curso.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PublicCursoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosPublicRoutingModule,
    MyMaterialModule,
    SharedModule
  ]
})
export class CursosPublicModule { }
