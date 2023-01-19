import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'lista',
        component:ListaComponent
      },
      {
        path:'form',
        component:FormComponent
      },
      {
        path:'edit',
        component:EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
