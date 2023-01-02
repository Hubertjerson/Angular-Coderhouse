import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicCursoComponent } from './pages/public-curso/public-curso.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'',component:PublicCursoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosPublicRoutingModule { }
