import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromCursosComponent } from './components/from-cursos/from-cursos.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { CursosApiListComponent } from './pages/cursos-api-list/cursos-api-list.component';
import { CursosApiFromComponent } from './pages/cursos-api-from/cursos-api-from.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:ListCursosComponent,},
      {path:'agregar',component:FromCursosComponent,canActivate:[AuthGuard],},
    ]
  },
  {
    path:'api',
    children:[
      {path:'',component:CursosApiListComponent,},
      {path:'agregar',component:CursosApiFromComponent,canActivate:[AuthGuard],}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
