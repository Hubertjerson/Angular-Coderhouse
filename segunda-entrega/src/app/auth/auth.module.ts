import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from '../modules/my-material.module';
import { SidenavComponent } from './pages/layouts/sidenav/sidenav.component';
import { HeaderComponent } from './pages/layouts/header/header.component';
import { PagewapperComponent } from './pages/layouts/pagewapper/pagewapper.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    PagewapperComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    MyMaterialModule,
  ]
})
export class AuthModule { }
