import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { NotFoundComponent } from './home/pages/not-found/not-found.component';


const routes: Routes = [
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'login',
    loadChildren:() => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'alumnos',
    canActivate:[AuthGuard],
    loadChildren:()=> import('./alumnos/alumnos.module').then(m=>m.AlumnosModule)
  },
  {
    path:'cursos',
    canActivate:[AuthGuard],
    loadChildren:()=> import('./cursos/cursos.module').then(m=>m.CursosModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
