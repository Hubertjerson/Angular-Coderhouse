import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { MiMaterialModule } from 'src/app/auth/shared/mi-material.module';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MiMaterialModule
  ]
})
export class HomeModule { }
