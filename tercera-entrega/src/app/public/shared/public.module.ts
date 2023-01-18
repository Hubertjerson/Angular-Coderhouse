import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PublicLayoutComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
