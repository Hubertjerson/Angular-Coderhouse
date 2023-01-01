import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromCursosComponent } from './components/from-cursos/from-cursos.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { CursosApiListComponent } from './pages/cursos-api-list/cursos-api-list.component';
import { CursosApiFromComponent } from './pages/cursos-api-from/cursos-api-from.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:ListCursosComponent,},
      {path:'agregar',component:FromCursosComponent},
    ]
  },
  {
    path:'api',
    children:[
      {path:'',component:CursosApiListComponent},
      {path:'agregar',component:CursosApiFromComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
