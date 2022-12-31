import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromAlumnosComponent } from './components/from-alumnos/from-alumnos.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';

const routes: Routes =[
  {
    path:'',
    children:[
      {path:'formulario',component:FromAlumnosComponent},
      {path:'listado',component:ListAlumnosComponent},
      {path:'**', redirectTo:'listado'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AlumnosRoutingModule { }
