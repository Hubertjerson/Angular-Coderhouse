import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './auth/shared/components/layouts/adminlayout/adminlayout.component';

const routes: Routes = [
  {
    path:'',
    component:AdminlayoutComponent,
    /*canActivate:[AuthGuard],*/
    /*canLoad:[GuardloadingGuard],*/
    children:[
      {
        path:'dashboard',
        loadChildren:() => import('./auth/views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'alumnos',
        loadChildren:() => import('./auth/views/alumnos/alumnos.module').then(m => m.AlumnosModule)
      },
      {
        path:'cursos',
        loadChildren:() => import('./auth/views/cursos/cursos.module').then(m => m.CursosModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
