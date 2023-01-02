import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,



  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    NotFoundComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
