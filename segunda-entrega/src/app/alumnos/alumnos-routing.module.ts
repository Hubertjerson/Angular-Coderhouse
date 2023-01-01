import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { FromAlumnosComponent } from './components/from-alumnos/from-alumnos.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { ApiFormStudentComponent } from './pages/api-form-student/api-form-student.component';
import { ApiListStudentComponent } from './pages/api-list-student/api-list-student.component';

const routes: Routes =[
  {
    path:'',
    canActivate:[AuthGuard],
    children:[
      {path:'',component:ListAlumnosComponent,canActivate:[AuthGuard],},
      {path:'agregar',component:FromAlumnosComponent,canActivate:[AuthGuard],},
    ]
  },
  {
    path:'api',
    children:[
      {path:'',component:ApiListStudentComponent,canActivate:[AuthGuard],},
      {path:'agregar', component:ApiFormStudentComponent,canActivate:[AuthGuard],}
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
