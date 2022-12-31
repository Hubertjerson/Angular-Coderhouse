import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromAlumnosComponent } from './components/from-alumnos/from-alumnos.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { ApiListStudentComponent } from './pages/api-list-student/api-list-student.component';

const routes: Routes =[
  {
    path:'',
    children:[
      {path:'',component:ListAlumnosComponent},
      {path:'agregar',component:FromAlumnosComponent},
    ]
  },
  {
    path:'api',
    children:[
      {path:'',component:ApiListStudentComponent},
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