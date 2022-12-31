import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WrapperComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    WrapperComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
