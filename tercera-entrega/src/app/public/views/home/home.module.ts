import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
