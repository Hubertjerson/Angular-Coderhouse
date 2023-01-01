import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';



@NgModule({
  declarations: [
    WrapperComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    WrapperComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
