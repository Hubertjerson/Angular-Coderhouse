import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { LoginComponent } from './login/login.component';
import { MiMaterialModule } from '../../shared/mi-material.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MiMaterialModule
  ]
})
export class SessionsModule { }
