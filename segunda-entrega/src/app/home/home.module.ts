import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class HomeModule { }
