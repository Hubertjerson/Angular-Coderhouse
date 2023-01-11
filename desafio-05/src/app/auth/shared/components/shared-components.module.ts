import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { MiMaterialModule } from '../mi-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    WrapperComponent,
    AdminlayoutComponent,
    AuthlayoutComponent
  ],
  imports: [
    CommonModule,
    MiMaterialModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
