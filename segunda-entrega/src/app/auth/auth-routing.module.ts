import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guard/auth.guard';
import { FormAlumnosComponent } from './components/Alumnos/pages/form-alumnos/form-alumnos.component';
import { ListAlumnosComponent } from './components/Alumnos/pages/list-alumnos/list-alumnos.component';
import { FormCursoComponent } from './components/Cursos/pages/form-curso/form-curso.component';
import { ListCursoComponent } from './components/Cursos/pages/list-curso/list-curso.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:LoginComponent},
      {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent,
      children:[
        {
          path:'',
          component:HomeComponent
        },
        {
          path:'alumnos',
          component:ListAlumnosComponent
        },
        {
          path:'agregar',
          component:FormAlumnosComponent
        },
        {
          path:'cursos',
          component:ListCursoComponent
        },
        {
          path:'agregarCurso',
          component:FormCursoComponent
        }
      ]
    }
    ]
  },
  {
    path:'NoSeUsa',
    loadChildren:()=> import('./components/Alumnos/alumnos.module').then(m=>m.AlumnosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
