import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { FromCursosComponent } from './components/from-cursos/from-cursos.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from '../modules/my-material.module';
import { CursosApiListComponent } from './pages/cursos-api-list/cursos-api-list.component';
import { CursosApiFromComponent } from './pages/cursos-api-from/cursos-api-from.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FromCursosComponent,
    ListCursosComponent,
    CursosApiListComponent,
    CursosApiFromComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    RouterModule,
    MyMaterialModule,
    HttpClientModule
  ]
})
export class CursosModule { }
