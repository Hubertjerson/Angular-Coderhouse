import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MiMaterialModule } from '../../shared/mi-material.module';


@NgModule({
  declarations: [
    LoginComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MiMaterialModule
  ]
})
export class SessionsModule { }
